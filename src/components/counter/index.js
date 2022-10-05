import { Component } from "react";

class Counter extends Component{
    constructor() { 
     super();
     this.count=0;
     this.addCount = this.addCount.bind(this);
     this. SubCount= this.SubCount.bind(this);
     this.Reset=this.Reset.bind(this);
     this.state={
        count:0,
      };
    }
    addCount(){
        if( this.state.count!==10){
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
        }
    }
   SubCount(){
    if( this.state.count!==0){
        this.setState({ count: this.state.count - 1 });
        console.log(this.state.count);
    }
    }
    Reset(){
        this.setState({count:0});
        console.log(this.state.count);
    }

    render() {
        const {count}=this.state;
        return(
            <div>
                <h1>Count {count}</h1>
                <button className={"button1"}onClick={this.addCount}>Increment</button>
                <h1> </h1>
                <button className={"button2"}onClick={this.SubCount}>Decrement</button>
                <h1> </h1>
                <button className={"button3"}onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}
export default Counter;