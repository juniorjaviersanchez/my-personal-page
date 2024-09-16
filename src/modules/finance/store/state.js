// export default () => ({
    
// })

export default () => ({
    isLoading: false,
    validations:{
        emailRules: [
            v => !!v || 'No has diligenciado este campo.',
            v => /.+@.+\..+/.test(v) || "El correo electrónico debe de ser valido"
        ],
        fieldTrim: [
            v => !!v || 'No has diligenciado este campo.'
        ],
        fieldMaxLength: [
            v => !!v || 'No has diligenciado este campo.',
            v => v.length <= 25 || 'Máximo 25 caracteres'
        ],
        fieldNumber: [
            v => !!v || 'No has diligenciado este campo.',
            v => ( !v.toString().includes(',') ) || 'No se aceptan comas',
            v => !isNaN(v) || 'Ingrese un valor numérico',
            v => v >= 0 || 'El valor ingresado debe ser positivo.'
        ],
        fieldNumberInteger: [
            v => !!v || 'No has diligenciado este campo.',
            v => ( !v.toString().includes(',') ) || 'No se aceptan comas',
            v => ( !v.toString().includes('.') ) || 'No se aceptan puntos',
            v => !isNaN(v) || 'Ingrese un valor numérico',
            v => v >= 5 || 'El valor ingresado debe ser mayor o igual a 5 días.'
        ],
        fieldNumberDouble: [
            v => !!v || 'No has diligenciado este campo.',
            v => !isNaN(v) || 'Ingrese un valor numérico',
            v => v >= 1 || 'El valor ingresado debe ser mayor o igual a S/1.'
        ],
        numberLess100: [
            v => v < 100 || 'El valor ingresado debe ser menor a 100.'
        ],
        fieldNumberHour: [
            v => ( !v.toString().includes('.') ) || 'No se aceptan puntos',
            v => v <= 24 || 'El valor debe ser menor o igual a 24'
        ],
        fieldNumberDate: [
            v => ( !v.toString().includes('.') ) || 'No se aceptan puntos',
            v => v <= 31 || 'El valor debe ser menor o igual a 31'
        ],
    }
})