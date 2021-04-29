import React, { Component } from 'react';
import {baseUrl} from '../shared/baseUrl';
var config = require('../config');

class Privacypolicy extends Component{

    render(){
        return (
            <div className="row" style={{backgroundColor:"#f6f6f6", marginTop:"0px", marginBottom:"-20px"}}>
                <div className="col-6 offset-3">
                    <h1 style={{fontWeight:"900", marginTop:"100px", color:"#e9e8e7", fontSize:"80px"}}>Privacy</h1>
                    <br />
                    <h1 style={{color:"#787878"}}>ShareTrace privacy policy</h1>
                    <br />
                    <p className="privacy-font-color">ShareTrace is an open-source application and website supported by <a className="privacy-a" href="https://www.hat-lab.org/">HAT-LAB</a>, <a className="privacy-a" href="https://weatherhead.case.edu/centers/xlab/">Case Western Reserve University</a>, and <a className="privacy-a" href="https://www.dataswift.io/">Datawift</a>. This privacy policy will explain how these organizations use personal data when you use our website and applications.</p>
                    <p className="privacy-font-color">What data do we collect?</p>
                    <p className="privacy-font-color">ShareTrace collects some basic personal identification information, like your email address, etc, when you create a personal data account. ShareTrace also collects basic profile information like your personal data account address. ShareTrace further collects your location information and allows you to store it privately inside your personal data account.</p>
                    <p className="privacy-font-color">How ShareTrace collects data</p>
                    <p className="privacy-font-color">You directly provide ShareTrace with some of the data we collect, and we collect some data from your device mobile. We collect data and process data when you:</p>
                    <ul className="privacy-font-color">
                        <li>✔ Register or join our waiting list online</li>
                        <li>✔ Create an account using the ShareTrace application for iOS and Android.</li>
                        <li>✔ Use or view our website via your browser’s cookies.</li>
                    </ul>
                    <p className="privacy-font-color">How will we use your data?</p>
                    <p className="privacy-font-color">ShareTrace collects your data so that we can:</p>
                    <ul className="privacy-font-color">
                        <li>✔ Add you to the ShareTrace waiting list.</li>
                        <li>✔ Safely help you track your locations information privately in your personal data account.</li>
                        <li>✔ Share your data with our partner companies so that they may offer you their products and services: <a className="privacy-a" href="https://www.dataswift.io/"></a></li>
                    </ul>
                    <p className="privacy-font-color">How do we store your data?</p>
                    <ul className="privacy-font-color">
                        <li>ShareTrace securely stores your email addresses with Mailchimp. ShareTrace does not store your location data anywhere, but the application takes locations information from your phone and places it privately in your personal data account, pulling it from there as needed to show it to you privately when you use ShareTrace.</li>
                    </ul>
                    <p className="privacy-font-color">Changes to our privacy policy</p>
                    <p className="privacy-font-color">ShareTrace keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 21 April 2020.</p>
                    <p className="privacy-font-color">How to contact us</p>
                    <p className="privacy-font-color">If you have any questions about this privacy policy, the data ShareTrace holds on you, or you would like to exercise one of your data protection rights, please do not hesitate to <a className="privacy-a" href="https://sharetrace-staging.herokuapp.com/contact">contact us</a>.</p>
                    <br />
                    <h1 style={{color:"#787878"}}>ShareTrace Terms of Service.</h1>
                    <br />
                    <p className="privacy-font-color">Last Updated</p>
                    <p className="privacy-font-color">These terms and conditions (Terms) were last updated on 21 April 2020. This page provides you with information about us (“ShareTrace”) and sets out the legal terms and conditions which apply to your use of:</p>
                    <ul className="privacy-font-color">
                        <li>sharetrace.org (the Site);</li>
                        <li>ShareTrace applications for iOS and Android</li>
                    </ul>
                    <p className="privacy-font-color">together the "ShareTrace Products."</p>
                    <p className="privacy-font-color">These Terms also refer to the following additional terms and conditions, which also apply to your use of the ShareTrace Products:</p>
                    <p className="privacy-font-color">Our Privacy Policy: this sets out details the personal data we collect in relation to you and explains how we handle that personal data.</p>
                    <p className="privacy-font-color">Please read these Terms carefully and make sure that you understand them before using any ShareTrace Products. Please note that by using any of ShareTrace Products, you agree to be bound by these Terms and any other documents expressly referred to in them.</p>
                    <p className="privacy-font-color">1. Information about us</p>
                    <p className="privacy-font-color">1.1 ShareTrace is an open source technology maintained by HAT-LAB, Dataswift, and Case Western Reserve University. References to “we”, “us” and “our” are references to the ShareTrace Products.</p>
                    <p className="privacy-font-color">1.2 To contact us, please see our Contact Us page at ShareTrace.org/contact.</p>
                    <p className="privacy-font-color">2. Definitions</p>
                    <p className="privacy-font-color">2.1 We use a number of definitions in these Terms. Where you see the following words or phrases in these Terms they have the following meanings:</p>
                    <p className="privacy-font-color">“Content” means text, graphics, photographs, sound and/or video material;</p>
                    <p className="privacy-font-color">“Intellectual Property Rights” means all copyright, database rights, trade marks, designs, service marks, community design rights, patents, utility models, business names and domain names, rights in computer software, rights to inventions, supplementary protection certificates, the right to sue for passing off, right to use, and protect the confidentiality of, confidential information (including know-how, and, trade secrets), goodwill, and any other similar rights, and all other intellectual property rights, in each case whether registered or unregistered and including any applications and rights to apply and be granted, renewals or extensions of, and rights to claim priority from, such rights and all similar or equivalent rights or forms of protection, which subsist or will subsist now or in the future, in each case in any part of the world;</p>
                    <p className="privacy-font-color">“Software” means the software contained on or used in the ShareTrace Products from time to time;</p>
                    <p className="privacy-font-color">“ShareTrace Partners” or “Partners” means Case Western Reserve University, Dataswift, and HAT-LAB.</p>
                    <p className="privacy-font-color">3. Rights in ShareTrace Materials and your licence to use them</p>
                    <p className="privacy-font-color">3.1 You may not use ShareTrace Products for immoral or illegal purposes, nor for any other purpose which we determine may be threatening, abusive or harmful or in any manner which might reasonable be considered to injure, tarnish, damage or otherwise negatively affect the reputation and goodwill associated with ShareTrace or its Partners. For the avoidance of doubt, this includes, but is not limited to, utilising the ShareTrace Products in respect of criminal activity or in contravention of any regulation or laws.</p>
                    <p className="privacy-font-color">3.2 You may not: (A) access ShareTrace in violation of any applicable law or regulation; or (B) access ShareTrace in any manner that: (i) compromises, breaks or circumvents any of our technical processes or security measures (or enable any third party to do so), including but not limited to, the creation or transmission of any virus, worms, trojan horse, cancel-bot or any other destructive or contaminating program; (ii) poses a security vulnerability to customers or users of ShareTrace Products; or (iii) tests the vulnerability of our systems or networks.</p>
                    <p className="privacy-font-color">3.3 You must not use ShareTrace Products for any re-sale or sub-licensing purposes (whether for a fee or otherwise).</p>
                    <p className="privacy-font-color">3.4 You must ensure that all use you make of ShareTrace Products is at all times in compliance with all applicable law and the rules that we set out in clause 4, below.</p>
                    <p className="privacy-font-color">3.5 If you use any of ShareTrace Products in breach of any of these Terms then your right to use the ShareTrace Products will cease immediately (and you will immediately cease such use) and if you have made or permitted anyone to make any copies of any ShareTrace Products you must ensure that all those copies are, at our option, returned to us or destroyed.</p>
                    <p className="privacy-font-color">4. Rules relating to your use of ShareTrace Products</p>
                    <p className="privacy-font-color">4.1 You are responsible for making all arrangements that may be necessary for you to have access to any ShareTrace Products.</p>
                    <p className="privacy-font-color">5. Content Uploading</p>
                    <p className="privacy-font-color">5.1 We may from time to time enable features that allow you to upload any photograph, video, comments, messages or other content (the “User Content”). If you use any such feature you must comply with the provisions of this clause 5.</p>
                    <p className="privacy-font-color">5.2 By uploading any User Content you acknowledge and agree that you are the author and owner of that User Content and all rights in it and that it complies with all applicable laws and is not obscene, defamatory or likely to be offensive to any other person and will not cause any damage to our reputation.</p>
                    <p className="privacy-font-color">6. Rules about linking to our Site</p>
                    <p className="privacy-font-color">6.1 You may link to any page of our Site, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. However, our Site must not be framed on any other website.</p>
                    <p className="privacy-font-color">6.2 You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
                    <p className="privacy-font-color">7. Prices advertised on our Site</p>
                    <p className="privacy-font-color">7.1 If we make any charges for any of our products or services then the price for these may from time to time be quoted on our Site. We take all reasonable care to ensure that such prices are correct at the time when the relevant information was entered onto the system, but they may vary for various reasons, including currency fluctuations. Please confirm the price of any product or service and be sure that you are happy with that before you order that product or service. We will not change any price which has been confirmed on a “purchase confirmation”.</p>
                    <p className="privacy-font-color">8. Our liability to you</p>
                    <p className="privacy-font-color">8.1 We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</p>
                    <p className="privacy-font-color">8.2 Please note that we provide ShareTrace Products to consumer users only for domestic and private use and not for any commercial or business purposes. We will therefore not have any liability to you for any loss of profits, loss of business or loss of business opportunity, or for any business interruption;</p>
                    <p className="privacy-font-color">8.3 Where we supply to you information regarding or dependent upon a given location as part of the ShareTrace Product we shall not be liable to you for any inaccuracies in the coordinates supplied nor for any consequence, however arising, of the provision of inaccurate coordinates;</p>
                    <p className="privacy-font-color">8.4 We shall not be liable to you for any failure, however caused, in any of the ShareTrace Products.</p>
                    <p className="privacy-font-color">9. Events outside our control</p>
                    <p className="privacy-font-color">We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by an Event Outside Our Control. An “Event Outside Our Control” is:</p>
                    <p className="privacy-font-color">“any act or event beyond our reasonable control, including without limitation accident to or breakdown of delivery vehicle, strikes, lock-outs or other industrial action by third parties, civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war, fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster, or failure of public or private telecommunications networks or impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport.”</p>
                    <p className="privacy-font-color">10. Responsibility for computer viruses and internet transmissions</p>
                    <p className="privacy-font-color">10.1 We do not guarantee that the ShareTrace Product will be secure or free from bugs or viruses.</p>
                    <p className="privacy-font-color">10.2 You are responsible for configuring your information technology, computer programmes and platform to access the Products. You should use your own virus protection software.</p>
                    <p className="privacy-font-color">11. Communications between us</p>
                    <p className="privacy-font-color">11.1 When we refer, in these Terms, to “in writing”, this will include e-mail.</p>
                    <p className="privacy-font-color">11.2 If you wish to contact us in writing, or if any clause in these Terms requires you to give us notice in writing, you can send this to us by e-mail to info@ShareTrace.io. We will confirm receipt of this by contacting you in writing, normally by e-mail.</p>
                    <p className="privacy-font-color">11.3 If we have to contact you or give you notice in writing, we will generally do so by e-mail to the e-mail address you have most recently provided to us</p>
                    <p className="privacy-font-color">11.4 If you have signed up to receive our newsletter then we will send this to you from time to time. If you wish to unsubscribe you may do so at any time.</p>
                    <p className="privacy-font-color">12. Other important terms</p>
                    <p className="privacy-font-color">12.1 If any provision or part-provision of the Terms is or becomes invalid, illegal or unenforceable, it will be deemed deleted, but that will not affect the validity and enforceability of the rest of the Terms.</p>
                    <p className="privacy-font-color">12.2 If we fail to insist that you perform any of your obligations under these Terms, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.</p>
                    <p className="privacy-font-color">12.3 These Terms are governed by and interpreted in accordance with English law.</p>
                    <br />
                    <br />
                </div>
            </div>
        );
    }

}

export default Privacypolicy;