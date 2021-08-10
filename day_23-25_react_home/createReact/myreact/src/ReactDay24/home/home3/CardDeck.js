import React from 'react';
import Card from './Card';

class CardDeck extends React.Component {
    state = {
        color: ['red', 'blue', 'green', 'purple', 'pink', 'red', 'blue', 'green', 'purple', 'pink']

    }

    shuffle = ([...arr]) => {
        let m = arr.length;
        // loop while โปรแกรมจะทำงานในลูปในขณะที่เงื่อนไขเป็นจริง
        // และจบการทำงานของลูปเมื่อเงื่อนไขเป็นเท็จ 
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    };

    handleShuffle = () => {
        this.setState({ color: this.shuffle(this.state.color) })
        console.log('shuffle', this.shuffle(this.state.color))
    }


    render() {

        return (
            <div>
                <Card colors={this.state.color} >
                    <h1>ลองกดปุ่มดูสิจ๊ะ</h1>
                </Card>
                <button
                    onClick={this.handleShuffle}
                >
                    New deck
                </button>

            </div>
        )
    }


}
export default CardDeck;