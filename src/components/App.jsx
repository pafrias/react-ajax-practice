import Feed from './Feed.jsx';
import Sidebar from './Sidebar.jsx';
import Request from './Request.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      currentUser: {
        avatar: "https://37g1m64fq1u437qtr32nn67f-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/winston.png",
        description: "I love life, traveling, and furry boots"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <main>
          <Sidebar profile={this.state.currentUser}/>
          <Feed response={this.state.response} submit={this.handleSubmit}/>
        </main>
      </div>
    );
  }

  handleSubmit() {
    this.submitHelper();
  }

  submitHelper(text) {
    var target = document.getElementById('user-message');
    var text = target.value;
    var message = { message: text, name: "Winston" };
    Request.post(message, (data) => {
      console.log(data);
      this.setState({
        response: data
      })
    })
 }
};

export default App;