import React, { Component } from 'react';
import List from '../list/list.component'




class Points extends Component {
  constructor(props){
    super(props)
    this.state={
      points: [
        {
            street: "821-3122 Consequat Ave",
            city: "D�gelis",
            zip: "26654",
            region: "Quebec",
            country: "Northern Mariana Islands",
            geo: "-38.35679, -156.51844",
            date: "1344063697",
            id: 1,
            userid: 1
            },
            {
            street: "P.O. Box 648, 4740 Nunc St.",
            city: "Port Harcourt",
            zip: "58484",
            region: "Rivers",
            country: "Turkey",
            geo: "-77.18825, -35.29423",
            date: "1430252806",
            id: 2,
            userid: 2
            },
            {
            street: "3443 Sit St.",
            city: "Naarden",
            zip: "66784",
            region: "N.",
            country: "Tuvalu",
            geo: "12.38797, -84.18245",
            date: "1237126561",
            id: 3,
            userid: 3
            },
            {
            street: "148-7050 Sagittis St.",
            city: "Gap",
            zip: "09628",
            region: "Provence-Alpes-Côte d'Azur",
            country: "Cuba",
            geo: "-4.69995, 20.02314",
            date: "999877236",
            id: 4,
            userid: 4
            },
            {
            street: "5439 Aliquet Avenue",
            city: "Istanbul",
            zip: "M31 8AY",
            region: "Istanbul",
            country: "Afghanistan",
            geo: "15.7086, 112.90554",
            date: "1374651185",
            id: 5,
            userid: 5
            },
            {
            street: "802-3303 Risus St.",
            city: "C�te-Saint-Luc",
            zip: "16895",
            region: "Quebec",
            country: "Sweden",
            geo: "70.18569, 11.3998",
            date: "1423633425",
            id: 6,
            userid: 6
            },
            {
            street: "8079 Cubilia Rd.",
            city: "Bauchi",
            zip: "95794",
            region: "Bauchi",
            country: "Slovakia",
            geo: "-70.75849, 167.39175",
            date: "1189030757",
            id: 7,
            userid: 7
            },
            {
            street: "P.O. Box 174, 624 Mauris Rd.",
            city: "Roubaix",
            zip: "17491-604",
            region: "Nord-Pas-de-Calais",
            country: "Tonga",
            geo: "88.79608, 130.49658",
            date: "1416656060",
            id: 8,
            userid: 8
            },
            {
            street: "837-4123 Augue Rd.",
            city: "Klagenfurt",
            zip: "37936-556",
            region: "Ktn",
            country: "Iraq",
            geo: "-68.44219, 154.00951",
            date: "1364739845",
            id: 9,
            userid: 9
            },
            {
            street: "Ap #166-1041 Orci. Rd.",
            city: "Oldenzaal",
            zip: "5507",
            region: "Overijssel",
            country: "Senegal",
            geo: "15.91029, -93.7422",
            date: "983759012",
            id: 10,
            userid: 10
            },]
    }
  }

  render() {
    return (
      <List points={this.state.points}/>
    );
  }
}

export default Points;
