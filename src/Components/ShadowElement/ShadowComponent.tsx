import React, {useEffect} from 'react';

// export class ShadowComponent extends React.Component {
//
//     // @ts-ignore
//     attachShadow(host) {
//         if (host == null) {
//             return;
//         }
//         host.attachShadow({mode: "open"});
//         host.shadowRoot.innerHTML = host.innerHTML;
//         host.innerHTML = "";
//     }
//
//     render() {
//         return (
//             <span ref={this.attachShadow}>
//                 {this.props.children}
//             </span>
//         );
//     }
//
// }

export const ShadowComponent = (props: any) => {
    useEffect(() => {
        const div = document.getElementById('shadow')
        // @ts-ignore
        const shadow = div.attachShadow({mode: 'open'})
        shadow.innerHTML = '<div> <h1>Hello Shadow DOM</h1> <h1>Durak</h1>' +

            '</div>';
    }, [])
    return <div id="shadow">
        {props.children}
    </div>
}