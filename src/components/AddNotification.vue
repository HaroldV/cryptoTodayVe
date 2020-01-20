<template>
    <div>
        <loading v-if="loading"></loading>

        <div v-else="loading" class="demo-list-action mdl-list">

            <div class="mdl-grid center-items">
                <form action="#" >
                    <div class="mdl-grid center-items">
                        <div class=" mdl-is-selected mdl-js-textfield">
                            <select v-model="selected" required>
                            <option disabled value="">Crypto para Notificar</option>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>XRP</option>
                                <option>LTC</option>
                                <option>DASH</option>
                                <option>DGB</option>
                                <option>SC</option>
                            </select>
                            <br />
                        </div>
                        <div class="mdl-textfield mdl-js-textfield">
                            <input v-model="priceNotification" class="mdl-cell mdl-cell--12-col mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2">
                            <label class="mdl-cell mdl-cell--12-col mdl-textfield__label" for="sample2">Agrega cantidad a notificar.</label>
                            <span class="mdl-cell mdl-cell--12-col mdl-textfield__error">Input is not a number!</span>
                        </div>
                         <button v-on:click="addNotification(selected, priceNotification)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Agregar Notification
                        </button>
                    </div>
                </form>
                <form action="#" >
                    <div class="mdl-grid center-items">
                        <ul class="demo-list-icon mdl-list">
                            <li class="mdl-list__item"  v-for="item in listNotifications" :key="item.id">
                                <span class="mdl-list__item-primary-content">
                                    {{item.cryptoSelected}}
                                </span>
                                <span class="mdl-list__item-primary-content">
                                    {{item.value | formatPrice}}
                                </span>
                                <i class="material-icons mdl-list__item-icon" v-on:click="removeNotification(listNotifications ,item.id)">close</i>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "./Loading";
import firebase from "firebase";
import { notifications } from '../firebase';



export default {
    name: 'AddNotification',
    firebase: {
        notifications: notifications,
    },
    components: { Loading },
    props: {
        currencies: { type: Array },
        loading: { type: Boolean },
    },
    data () {
        return {
            priceNotification: '',
            listNotifications: '',
            selected: '',
        }
    },
    mounted () {
        this.listNotifications = this.listNotificationAddeds();

    },

    methods: {
        addNotification: (cryptoSelected, priceNotification) => {
            if(cryptoSelected !== '') {
                notifications.push({cryptoSelected, priceNotification}, function(err) {
                    if(err)
                        console.log('error al registrar el pago ');
                    else
                        console.log('registrado correctamente');
                });
            }
        },
        listNotificationAddeds: () => {
            let list = [];

            notifications.on('value', function(notification, index) {
               const values = notification.val();
                console.log(values);
                Object.keys(values).map((elem) => {
                   list.push({id: elem, cryptoSelected: values[elem].cryptoSelected, value: values[elem].priceNotification});
               })
            });

            return list;
        },
        removeNotification: (listNotifications, index) => {
            listNotifications.splice(index, 1);
            notifications.child(index).remove(function(err) {
                if(err)
                    console.log('Error al intentar elminiar la notificacion');
                else
                    console.log('notificacion eliminada correctamente');
            })
        }
    }
}
</script>

<style scoped>
.mdl-grid.center-items {
    justify-content: center;
}
.mdl-button--raised.mdl-button--colored {
    background: #1e8600;
    color: rgb(255,255,255);
}
.mdl-textfield.is-focused .mdl-textfield__label {
    color: #ddd;
}
.mdl-textfield__label:after{
    background-color: #1e8600;
}
.demo-list-icon {
    width: 300px;
}

.btn-close {
    cursor: pointer;
}
</style>