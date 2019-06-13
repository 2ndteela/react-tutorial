import React, { Component } from 'react';
import Header from '../../components/Header'
import Dialog from '../../components/Dialog'
import './style.css'

class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Aerith',
            array: [
                {
                    name: 'Cloud',
                    pic: 'https://mykombini-ab5a.kxcdn.com/38092-large/play-arts-kai-final-fantasy-vii-remake-no1-cloud-strife-square-enix.jpg',
                    link: 'https://finalfantasy.fandom.com/wiki/Cloud_Strife'
                },
                {
                    name: 'Aerith',
                    pic: 'http://www.toyark.com/attachments/49342d1530717485-36584986_419667138518822_5104912353233731584_n.jpg',
                    link: 'https://finalfantasy.fandom.com/wiki/Aerith_Gainsborough'
                },
                {
                    name: 'Barrett',
                    pic: 'https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/964952e196f2466ca3a8bb548711fb15.jpg',
                    link: 'https://finalfantasy.fandom.com/wiki/Barret_Wallace'
                },
                {
                    name: 'Sephiroth',
                    pic: 'https://images-na.ssl-images-amazon.com/images/I/61QOSTBuSJL._SX425_.jpg',
                    link: 'https://finalfantasy.fandom.com/wiki/Sephiroth'
                }
            ],
            colorText: 'Change my Color!',
            dialog: false
        }
        this.hideDialog = this.hideDialog.bind(this)
    }

    updateState(field, value) {
        this.setState({
            [field]: value
        })
    }

    switchClass() {
        this.setState({
            flip: !this.state.flip
        })
    }

    showDialog() {
        this.updateState('dialog', true)
    }

    hideDialog() {
        this.updateState('dialog', false)
    }

    render() { 
        return ( 
            <div>
                <Header header="Updating State" subText="Always use this.setState()" />
                <div className="example-div">
                   <p>Never, I repeat never, update state like this: <span className="highlight">this.name = "Cloud Strife"</span>. Instead, use this: </p>
                   <p style={{margin: '16px 0'}}> This.setState({"{ name: Cloud Strife }"}, callBackFunciton())</p>
                   <p>
                        It will updated your state and then call the funciton you pass in as the second parameter. You can also leave the callback function out.
                        This is also how you bind inputs to state. Check out the updateState function in this file to see an example.
                   </p>
                   <br></br>
                   <p>Try it out:</p>
                   <input style={{marginTop: '8px'}} value={this.state.name} onChange={(e) => this.updateState('name', e.target.value)}></input>
                   <p style={{marginTop: '8px'}}>{this.state.name}</p>
                </div>
                <Header header="Iterating over a list" subText="Think ng-repeat or v-for" />
                <div className="example-div">
                    <p>
                        To itterate over a list and display it, use the map function, which returns a new array out of another array, and have it return a JSX element.
                        Take a look at the source code to see an example.
                    </p>
                </div>
                <div className="example-div row-div">
                    {this.state.array.map((p, i) => {
                        return(
                            <div className="character-card">
                                <img src={p.pic} width="200px" />
                                <a href={p.link}>{p.name}</a>
                            </div>
                        )
                    })}
                </div>
                <Header header="Conditional Rendering" subText="v-if's and such" ></Header>
                <div className="example-div">
                    <p>Since there are no directives in React we have to do this manually with a funciton, luckily it's not too hard. For styles it's easy to just use a turnary statement, for something more complicated like a dialog and we'll need a function or extra component.</p>
                    <div style={{flexDirection: 'row', alignItems: 'center', padding: '16px 0'}} > 
                        <h2 className={this.state.flip ? 'blue-boi' : '' }>{this.state.colorText}</h2>
                        <button style={{marginLeft: '16px'}} onClick={() => this.switchClass()}>Flip Color</button>
                    </div>
                    <button onClick={() => this.showDialog()} >Show Dialog</button>

                </div>
                <Dialog visible={this.state.dialog} callback={this.hideDialog}>
                     <input id="color-text" value={this.state.colorText} onChange={(e) => this.updateState('colorText', e.target.value) } />
                </Dialog>
            </div>
         );
    }
}
 
export default Examples;