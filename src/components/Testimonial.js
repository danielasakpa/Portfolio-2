import {Stack, Typography} from "@mui/material"


const Testimonial = ({item}) => {
    return (
        <Stack className="testimonial" display="flex" px={7} justifyContent="center" alignItems="center" mt={8}>
          <Typography variant="h2" textAlign="center" sx={{fontSize: {md: "35px", xs: "20px"}, fontFamily: "Neue Haas Grotesk Display Pro"}} >{item.text}</Typography>
          <Typography variant="h66666" textAlign="center" mt={3} sx={{fontSize: {md: "30px", xs: "15px"}, fontFamily: "Neue Haas Grotesk Display Pro", fontStyle: "italic"}}>{item.name}</Typography>
        </Stack>
    )
}

export default Testimonial;