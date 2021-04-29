import React, { Component } from 'react';
import {baseUrl} from '../shared/baseUrl';
var config = require('../config');

class Faq extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row" style={{backgroundColor:"#f6f6f6", marginTop:"0px", marginBottom:"-20px"}}>
                <div className="col-6 offset-3">
                    <h1 style={{fontWeight:"900", marginTop:"100px", color:"#e9e8e7", fontSize:"80px"}}>FAQs</h1>
                    <br />
                    <h1 style={{color:"#787878"}}>General</h1>
                    <br />
                    <p className="faq-font-color">What is the ShareTrace app?</p>
                    <p className="faq-font-ans-color">The ShareTrace app (iOS & Android) is a smart digital risk assessment service.</p>
                    <p className="faq-font-color">What does it do?</p>
                    <p className="faq-font-ans-color">ShareTrace provides contact tracing in a privacy-preserving way and offers additional personalized infection risk management tools with which individual users and communities can fight the spread of Covid-19.</p>
                    <p className="faq-font-color">Why do we need it?</p>
                    <p className="faq-font-ans-color">Due to the speed and subtlety of virus transmission as well as the scope of the pandemic, digital contact tracing has emerged as a powerful tool to assist government and healthcare authorities to rapidly respond to the public health crisis.</p>
                    <p className="faq-font-color">Who is supporting the app?</p>
                    <p className="faq-font-ans-color">ShareTrace is led by a team from Case Western Reserve University and HAT-LAB. Originally started from a virtual, global hackathon, #hackfromhome, a challenge that involved 822 participants from 62 countries, ShareTrace members include researchers, developers, designers, and students.</p>
                    <p className="faq-font-color">Is the project open source?</p>
                    <p className="faq-font-ans-color">Yes. The implementations of the open source can be found <a href="https://github.com/SafeTrace-community" className="faq-a">here</a>.</p>
                    <p className="faq-font-color">Why do we need it?</p>
                    <p className="faq-font-ans-color">Users with devices running Apple iOS and Google's Android can register to become beta testers of the application. <a href="#" className="faq-a">Click here for Android</a> and <a href="#" className="faq-a">click here for iOS</a></p>
                    <p className="faq-font-color">How does it protect privacy?</p>
                    <p className="faq-font-ans-color">ShareTrace uses state-of-the-art decentralized Personal Data Accounts (PDA) to store symptoms and contact histories of individual Sharetrace users. Users legally own their PDA, and only users have access to these.</p>
                    <p className="faq-font-ans-color">Sharetrace users use the computational functions of their PDA to calculate a personal Covid-19 risk score. With the permission of the user, this risk score is then de-identified and sent to the ShareTrace server, where it is used as an anonymous digital twin to contribute to our hyperlocal network propagation model. In this model, the individual risk scores are recalculated based upon their encounter histories, and the updated risk scores are propagated back down the the PDAs owned by the users.</p>
                    <p className="faq-font-color">What is a digital twin?</p>
                    <p className="faq-font-ans-color">In this case a digital twin is an anonymised risk score that is sent to the ShareTrace server from the PDA and used to represent an individual user and their interactions with others.</p>
                    <p className="faq-font-color">What is a PDA?</p>
                    <p className="faq-font-ans-color">A Personal Data Account. A PDA is a state-of-the-art decentralized microserver that enables users to gain legal and functional control over their personal data.</p>
                    <br />
                    <h1 style={{color:"#787878"}}>Competitors</h1>
                    <br />
                    <p className="faq-font-color">What are conventional digital contact tracing models?</p>
                    <p className="faq-font-ans-color">Most conventional contact tracing apps adopt a decentralized proximity list based model using the transfer of Bluetooth IDs.</p>
                    <p className="faq-font-color">What does Apple and Google do?</p>
                    <p className="faq-font-ans-color">Apple and Google have announced their joint efforts to produce a decentralised privacy-preserving “Exposure Notification” system that provides the conventional anonymized contact lists for collecting Bluetooth radio signals on a user’s device. The release of their application programming interface will allow other contact tracing apps to work across Android and iOS devices.</p>
                    <p className="faq-font-color">What does a decentralized proximity list offer?</p>
                    <p className="faq-font-ans-color">It can locally calculate whether the smartphone owner is at risk of having been exposed to a virus because they were in close proximity to an infected individual.</p>
                    <p className="faq-font-color">What are some concerns with the decentralised proximity method?</p>
                    <p className="faq-font-ans-color">This method is only partially effective in quickly and efficiently identifying individuals at high risk of infection, particularly with highly viral epidemic situations, where many carriers of a virus are asymptomatic.</p>
                    <p className="faq-font-color">What makes ShareTrace’s contact tracing model different?</p>
                    <p className="faq-font-ans-color">ShareTrace deals with the problem of asymptomatic carriers. To do so, it uses a hyperlocal network propagation model in quickly and effectively calculating and notifying the exposure risks from direct and indirect encounters.</p>
                    <p className="faq-font-ans-color">The app does this not just between users who test positive, but also pre-tested symptomatic and asymptomatic users, so ShareTrace can identify potential exposure to Covid-19 much earlier than other approaches.</p>
                    <p className="faq-font-color">Why is a network propagation model important?</p>
                    <p className="faq-font-ans-color">It allows a) the identification of direct and indirect encounters; and (b) the ability to update the potential risk of a user to others based on their symptoms and their encounter history</p>
                    <br />
                    <h1 style={{color:"#787878"}}>Specifics</h1>
                    <br />
                    <p className="faq-font-color">Are data stored and processed in a centralised or decentralised manner?</p>
                    <p className="faq-font-ans-color">Decentralised, ShareTrace’s use of PDAs and the HAT microserver offers a state-of-the-art privacy by design architecture in which data storage and processing is decentralised in the cloud.</p>
                    <p className="faq-font-color">Does the app use GPS, bluetooth or both?</p>
                    <p className="faq-font-ans-color">ShareTrace uses Bluetooth IDs that are transmitted to other devices during a contact. Bluetooth IDs are updated regularly to avoid potential bluetooth location tracking.</p>
                    <p className="faq-font-ans-color">GPS data is also collected only with the explicit opt-in consent from the user to be shared with epidemiologists and research groups to enable these groups to further analyze the spread of the virus.</p>
                    <p className="faq-font-color">What other data is collected?</p>
                    <p className="faq-font-ans-color">Data pertaining to the users symptoms is required to generate their risk score and is stored in their PDA before being uploaded to the ShareTrace server.</p>
                    <p className="faq-font-color">How does the app track a user's risk?</p>
                    <p className="faq-font-ans-color">A user’s risk is updated when there are changes in (i) their own symptoms, (ii) symptoms of other users in the networks, (iii) diagnosis of other users (not necessarily direct contacts), and (iv) changes in the interaction network (not just direct contacts of the users).</p>
                    <p className="faq-font-color">So what actually gets stored in the user's PDA?</p>
                    <p className="faq-font-ans-color">Both the local contact vector and symptom vector of the user will be stored at the user’s PDA and it will be updated over time (as the user has new interactions or as the user updates their symptoms).</p>
                    <p className="faq-font-ans-color">Individual GPS data is collected differently to provide privacy guarantees and is then stored in the users PDA.</p>
                    <p className="faq-font-color">What data is processed in the ShareTrace server?</p>
                    <p className="faq-font-ans-color">ShareTrace server updates the risk scores of users by (i) creating the interaction graph and (ii) applying the graph propagation algorithm on the constructed graph.</p>
                    <p className="faq-font-color">What happens to the data once it has been processed in the server?</p>
                    <p className="faq-font-ans-color">ShareTrace server does not store data permanently. It deletes the collected data and parameters after each processing. We require this to minimize the risk of linkability between two interaction graphs that are generated on two different days (and hence to minimize the risk of tracing a user).</p>
                    <p className="faq-font-color">How does the ShareTrace server protect against deanonymization?</p>
                    <p className="faq-font-ans-color">The interaction graph that is used in the server includes no location information about the users. Also, it is computationally infeasible to deanonymize large scale graph data, especially when there is no auxiliary graph to help.</p>
                    <p className="faq-font-color">How do I own my data?</p>
                    <p className="faq-font-ans-color">By using a HAT microserver the user is given intellectual property rights of personal data through their ownership of a database, wrapped with containerised microservices.</p>
                    <p className="faq-font-color">Is the ShareTrace app interoperable?</p>
                    <p className="faq-font-ans-color">ShareTrace is designed to provide interoperability with other contact tracing apps. This requires a common Bluetooth ID framework for contact vectors to be shared. When a cross-platform Bluetooth ID broadcasting framework emerges, ShareTrace users (in-network users) can collect Bluetooth IDs of other app users (out-of-network users), and vice versa.</p>
                    <p className="faq-font-color">How does the solution interact with public health authorities?</p>
                    <p className="faq-font-ans-color">Personal Data Accounts are highly flexible tools. As owners of PDAs, users can choose to share their data with applications other than Sharetrace. As it develops, Sharetrace will therefore be developing integrations that enable users to choose to share their risk scores and anonymised location history with public health authorities.</p>
                    <p className="faq-font-color">What does a notification of contact with an infected person look like?</p>
                    <p className="faq-font-ans-color">Users will be notified twice a day of changes to their risk score. They can view their risk score by viewing our user interface. There are no direct notifications of encounters with risky individuals; instead, users are updated with changes to their score</p>
                    <p className="faq-font-color">Who else is notified?</p>
                    <p className="faq-font-ans-color">All users will be updated twice a day if their risk score has changed. Risk scores will change based encounters people have had that day, or on previous days with people whose risk scores have since changed.</p>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Faq;