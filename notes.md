There are three steps in Life Cycle Components ->

1st step is Mounting- constructor() -> render() -> componentDidMount()(This we need not initialize as it is already provided to us in the class. This step occurs when our component is sticking to the DOM for the very first time

2nd step is Updating- render()  -> componentDidUpdate()

3rd step is UnMounting- componentWillUnMount()(Ye function tab hoga jab hamara component DOM se just pehle hatne wala hoga)

Important Note- componentDidMount() me hum vo wale saare kaam karte hai jisme hume sideEffect wale kaam karne hote hai jaise ki API calls  wagarh jisme ki hume pata nhi ki ek sec me data aaye ya 2-3sec lag jaaye i.e jisme ki hume await lagana padega 

npm install react-router-dom