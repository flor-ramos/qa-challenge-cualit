module.exports = {
  "Retrieve API (POST)": function(client) {
      var apiUrl = 'https://api.facturasimple.uy/api/v1/usuarios/login';
      var postData = {
          'email': 'demo@cualit.com',
          'password': 'facturasimple'
      };
      client.apiPost(apiUrl, postData,null,null, function(response) {
          let data = response.body;
          client.assert.equal(response?.statusCode, 200, "200 OK");
          client.assert.equal(data?.success, true, "Status should be success");
          if (!data?.token) {
            client.assert.equal(false, "Token should be presented");
          }
          client.end();
      });

  }

};