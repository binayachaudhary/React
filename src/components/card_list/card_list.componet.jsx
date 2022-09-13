import { Component } from 'react';
import './card_list.style.css';


class CardList extends Component{

    render(){
        const {moster}=this.props;
        return (
            <div className='card-list'>
                {moster.map((moster) => {
                      return ( <div className="card-container" key={moster.id}>
                            <img src={`https://robohash.org/${moster.id}?set=set2$size=150*150`} alt={`monster ${moster.name}`} />
                            <h2>{moster.name}</h2>
                            <p>{moster.email}</p>
                        </div>
                      );
              })}
            </div>
        )
    }
}

export default CardList;