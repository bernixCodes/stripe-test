const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("/create-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) {
        // console.log(res);
        return res.json();
      }
      return res.json().then((data) => Promise.reject(data));
    })
    .then(({ url }) => {
      window.location = url;
      console.log(url);
    })
    .catch((e) => {
      console.error(e.error);
    });
});
