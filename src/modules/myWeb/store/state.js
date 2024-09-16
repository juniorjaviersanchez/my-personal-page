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
            v => ( !v.toString().includes('.') && !v.toString().includes(',') ) || 'No se aceptan puntos ni comas',
            v => !isNaN(v) || 'Ingrese un valor numérico',
            v => v.toString().length == 9 || 'Tiene que tener 9 números'
        ]
    }
})