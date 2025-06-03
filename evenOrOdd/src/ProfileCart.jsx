
const ProfileCart = ({image,firstName,lastName,phone}) => {
 

return (
    <div className="profile-container">
     <img src={image} alt="profile-img" />
     <p>{firstName + " " + lastName}</p>
     <p>{phone}</p>
    </div>
)
}

export default ProfileCart