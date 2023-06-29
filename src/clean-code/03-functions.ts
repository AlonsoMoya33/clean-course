(() => {

    // función para obtener información de una película por Id
    function getMovieDescriptionById( movieId: number ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastInformatonById( actorId: number ) {
        console.log({ actorId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorsBioById( ActorId: number ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie{
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }
    function createMovie({ title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( firstName: string, lastName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( firstName === 'fernando' || lastName ==='alejandro') return false;

        console.log('Crear actor');
        return true;        

    }

    //Continue
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        let result: number;

        if ( isDead ) {
            result = 1500;
        return result;
        } 
        if ( isSeparated ) {
             result = 2500;
        return result;
        }

        return (isRetired) ? 3000: 4000        
        }
    
})();

