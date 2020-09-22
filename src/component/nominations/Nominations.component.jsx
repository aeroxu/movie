import React, { Component } from 'react';

import './Nominations.component.scss';

import NominationItems from '../nomination-items/nomination-items.component';
import { connect } from 'react-redux';

class Nominations extends Component {

    render(){
        const {nominations} = this.props
        return (
            <div className='nominations-container'>
                <div className='nominations-content'>
                    <h3>Nominations</h3>
                    {nominations.map(nomination => 
                    <NominationItems
                        key={nomination.imdbID} 
                        id={nomination.imdbID} 
                        title={nomination.Title} 
                        year={nomination.Year}/>
                    )}
                </div>
            </div>
        )
    } 
    
    componentDidUpdate(){
        const {nominations} = this.props;
        if(nominations.length === 5){
          alert("Congratulations! You have 5 nominations!")
        }
    }
}

const mapStateToProps = state => ({
    nominations: state.nominations.nominations
})

export default connect(mapStateToProps)(Nominations);