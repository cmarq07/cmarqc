export default function Kusto(props) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill={props.color ? props.color : "white" } className={props.className}>
            <path d="M0 142.021v756.715l573.052 93.833v-961.137l-573.052 110.589zM335.118 690.497l-111.706-169.88v169.88h-84.897v-352.991h84.897v162.346l111.706-162.346h93.833l-122.876 172.493 146.893 180.498h-117.85zM609.697 164.322v240.933h61.368v383.708h-61.368v80.502h414.303v-705.144h-414.303zM800.54 788.964h-99.709v-271.418h99.709v271.418zM935.737 788.964h-104.815v-499.484h104.815v499.484z" />
        </svg>
    )
}