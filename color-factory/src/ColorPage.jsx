import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'

function ColorPage({colors}){
    const {color} = useParams()
    const navigate = useNavigate();
    const checkColor = colors.find(c => color ===c.colorName)
    if(!checkColor){
        return <Navigate to="/colors" replace />
    }
    return(
    <div style={{backgroundColor: colors[0].color}}>
        <h1>THIS IS: {color}</h1>
        <h2>ISN'T IT BEAUTIFUL?</h2>
        <Link to={`/colors`}>Go Back</Link>
    </div>
    )
}

export default ColorPage