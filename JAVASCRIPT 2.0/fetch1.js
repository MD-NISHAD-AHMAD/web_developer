const BASE_URL = 'https://jsonplaceholder.typicode.com/comments';

const apicalling1 = async () => {
  try {
    let data = await fetch(BASE_URL);
    let res = await data.json();


    let firstComment = res[0];

    alert(
      `postId: ${firstComment.postId}
id: ${firstComment.id}
name: ${firstComment.name}
email: ${firstComment.email}
body: ${firstComment.body}`
    );

    console.log("res:", res); 
  } catch (error) {
    console.log("error:", error);
  }
};

apicalling1();
