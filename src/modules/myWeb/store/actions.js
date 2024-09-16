// export const myAction = async ({comit}) => {

// }

import emailjs from '@emailjs/browser';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

export const updateIsLoading = async ({commit}, value) => {
    commit('setIsLoading', value)
}

export const sendEmail  = async ({commit}, data) => {
    commit('setIsLoading', true)
    
    return emailjs.send('service_556h7is','template_my038c9', data, '63S45CRC2iffSlA5M')
        .then((response) => {
            $toast.success('Mensaje enviado correctamente')
            console.log('SUCCESS!', response.status, response.text);
            commit('setIsLoading', false)
            return true
        }, (err) => {
            $toast.error('Ha ocurrido un error al realizar la acción.' + err)
            commit('setIsLoading', false)
            return false
        });
}

