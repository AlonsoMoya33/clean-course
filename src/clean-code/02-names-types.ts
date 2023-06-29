(() => {

  
    const temperatureOnCelsius = [33.6, 12.34];

    const ipRoute = '123.123.123.123';

    const listOfUsers = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const usersEmails = listOfUsers.map( user => user.email );

    const canJump = false;
    const ifRun = true;
    const ifInvetoryIsEmpty = true;
    const whenLoading = false;

    const startTime = new Date().getTime();
    const stopTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( bookURL: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( area: number ) {
        throw new Error('Function not implemented.');
    }

    function printTask() {
        throw new Error('Function not implemented.');
    }
    
})();