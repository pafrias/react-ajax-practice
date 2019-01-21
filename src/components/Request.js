
var Request = {

  url: `http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting`,
  
  post: function(message, callback = () => {}) { 
    $.ajax({
      url: Request.url,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        callback(data) 
      },
      error: (data) => {
        console.log(typeof data);
        console.log('Failed to complete request', data);
      }
    });
  },

  get: function(options, callback) { 
    $.ajax({
      url: Request.url,
      type: 'GET'
    })
  },
  
  options: function(options, callback) { 
    $.ajax({
      url: Request.url,
      type: 'OPTIONS',
      data: data,
      dataType: 'application/json',
      success: (data) => {
        callback(data) 
      },
      error: (data) => {
        console.log('Failed to complete request', data);
      }
    });
  }
}

export default Request;