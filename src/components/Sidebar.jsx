var Sidebar = props => (
  <div className="profile_pic">Change to a column!
    <img src={props.profile.avatar} />
    <div className="description">{props.profile.description}</div>
    {/*<button onClick={props.click} data-ajax-type="options">Options</button>
    <button onClick={props.click} data-ajax-type="post">Post</button>
    <button onClick={props.click} data-ajax-type="get">Get</button>*/}
  </div>
)

export default Sidebar;