class Transform {
    static getTds(obj) {
        console.log(obj, 'obj')
        return [
            {
                label: obj.destinity
            },
            {
                label: obj.dateSal
            },
            {
                // estado del viaje en base a la fecha de retorno < fecha acutal
                label: obj.dateReturn
            },
            {
                label: obj.names
            }
        ]

    }
}

export default Transform;
