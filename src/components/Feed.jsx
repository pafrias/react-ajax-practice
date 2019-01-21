import Article from './Article.jsx';

var Feed = props => (
    <div className="feed">
        <Article text={props.response} />
        <input id="user-message" type="text" placeholder="type here!"/>
        <button onClick={props.submit}>Submit!</button>
      </div>
);

export default Feed;