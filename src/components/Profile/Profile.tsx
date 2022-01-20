import "./profile.css";

type ProfileProps = {
  name?: string;
  imgAvatar?: string;
  location?: string;
  textBio?: string;
};

export default function Profile(props: ProfileProps): JSX.Element {
  return (
    <div className="profile">
      <img src={props.imgAvatar} alt={props.name} className="avatar" />
      <h2>{props.name}</h2>
      <p className="bio">{props.textBio}</p>
      <span>Location: {props.location}</span>
    </div>
  );
}
