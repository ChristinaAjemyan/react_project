import React, { Component } from 'react';
import List from '../list/list.component'




class Points extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
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
            }],
      users: [
            {
            id: 1,
            name: "Quinn Dunn",
            email: "egestas@quamafelis.com"
            },
            {
            id: 2,
            name: "Pascale B. Acosta",
            email: "quam@molestieorci.com"
            },
            {
            id: 3,
            name: "Nita Lyons",
            email: "Praesent.eu@Sedmolestie.org"
            },
            {
            id: 4,
            name: "Xandra F. Fleming",
            email: "eget.mollis.lectus@Nunc.net"
            },
            {
            id: 5,
            name: "Leroy H. Mathews",
            email: "ultricies.adipiscing@lobortistellus.com"
            },
            {
            id: 6,
            name: "Honorato Barber",
            email: "ac.mattis.semper@Namporttitor.org"
            },
            {
            id: 7,
            name: "Pearl K. Jackson",
            email: "in.dolor@Utsagittislobortis.co.uk"
            },
            {
            id: 8,
            name: "Unity Y. Strong",
            email: "sapien.Aenean.massa@ipsumporta.com"
            },
            {
            id: 9,
            name: "Cassidy Rivera",
            email: "nisl.Maecenas@scelerisque.com"
            },
            {
            id: 10,
            name: "Omar Ferguson",
            email: "ipsum.primis@nequenon.net"
            }],
      selectedUser: undefined
    }
    setTimeout(()=>{
      this.setState({filteredPoints: this.state.points})
    },100)
    this.options = this.state.users.map((el,index)=>{
      return <option key={index} value={el.id}>{el.name}</option>
    })
  }
  selectUser(e){
    this.setState({selectedUser: e.target.value})
    let arr = this.state.points.filter(el => {
      if(+el.userid===+e.target.value){
        return el
      }})
    this.setState({filteredPoints: arr})
  }

  render() {
    return (
      <div className="lists">
        <div className="row">
          <div className="col-md-5">
            <p className="m-2">Select from Points</p>
          </div>
          <div className="col-md-4">
            <select className="form-control" value={this.state.selectedUser} onChange={this.selectUser.bind(this)}>
            <option value={undefined}>Select User</option>
             {this.options}
            </select>
          </div>
          <div className="col-md-3 p-0">
            <button className="btn btn-success px-2" onClick={this.handleSelect.bind(this,{},'point')}>Add Point</button>
          </div>
        </div>
          
        <List points={this.state.filteredPoints} onPointSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default Points;
