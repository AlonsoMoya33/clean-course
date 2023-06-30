interface Bird{
    eat():void;
}

interface FlyingBird {
    fly():void;
}

interface RunningBird{
    run():void;
}

interface SwimmingBird{
    swim():void;
}

class Tucan implements Bird,FlyingBird{
    public fly ()   {}
    public eat ()   {}
}

class humminbird implements Bird,FlyingBird{
    public fly()    {}
    public eat()    {}

}

class ostrich implements Bird, RunningBird{
  
    public eat()    {}
    public run()    {}

}

class penguin implements Bird, SwimmingBird{

    public eat()    {}
    public swim()   {}
}