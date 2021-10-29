import { withRouter } from "react-router-dom";

export const FetchData = (body) => {
  return fetch("https://hms-server.herokuapp.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "*",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 500) {
        console.log('Looks like there was a problem. Status Code: ' +
          res.status);
        return false;
      }
      return res.json();
    })
    .then((Response) => {
      if (Response.data) {
        return Response;
      } else {
        return Response.errors[0].message;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const LoginFetchData = (body) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  };

  return fetch("http://localhost:8080/validate", requestOptions)
    .then((res) => {
      if (res.status !== 200 && res.status !== 500) {
        console.log('Looks like there was a problem. Status Code: ' +
          res.status);
        return -1
      }
      return res.json();
    })
    .then(Response => {
      return Response
    })
    .catch((error) => {
      if (!error.response) {
        console.log("error:");
      }
    });
};

export const LockScreenValidate = (body) => {
  return fetch("https://hms-server.herokuapp.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "appliction/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.Status !== 200 && res.Status !== 500) {
        console.log('Looks like there was a problem. Status Code: ' +
          res.Status);
        return false;
      }
      return res.json();
    })
    .then((Response) => {
      if (Response.data == (null || undefined)) {
        return "incorrect password";
      } else {
        alert("response.data is not equal to null:");
        return Response.data.lockScreenValidation;
      }
    })
    .catch((error) => {
      if (!error.response) {
        return false;
      }
    });
};
export default withRouter;
