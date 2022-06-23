const teamDataOne = [
  {
    img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/vtpoe98h5yyctqtm6f2i",
    name: "Abdul Yaqoob",
    position: "University of Punjab",
    description: "Focused on applying latest solar innovation and methodologies to the technology to enhance efficiency and generate more power to homes and offices."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQrS7iDx6eMrNBGaRbXSJLsNvLNClKXah5Q&usqp=CAU",
    name: "Jameel Hanan",
    position: "University of Lahore",
    description: "Deep understanding of the environmental factors of the country, and  research on the best adoption of solar technology to increase capacity into the national grid."
  },
  {
    img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/uxujoeyqfrtnhsaw7bdf",
    name: "Saira Kazmi",
    position: "Karachi Institute of Information Technology",
    description: "Expert in business management and financial outlook of solar solution adaptation to the national economy and personal benefits."
  },
  {
    img: "https://www.worldipforum.com/pimg/1653993061-b.jpg",
    name: "Farrukh Rehman",
    position: "NUML University",
    description: "Social responsibility to the environmental factors and detailed focus and study on how to contribute to environment saftey and cleanliness."
  }
];

let cards = " ";
teamDataOne.forEach((item)=>{
  cards += `
          <div class="col-sm-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${item.img}" 
                    class="img-fluid rounded-start" alt="...">
                  </div>
                <div class="col-md-8 text-start lato">
                  <div class="card-body fs-6">
                    <h5 class="card-title fs-6">${item.name}</h5>
                    <h6 class="text-danger fs-6">${item.position}</h6>
                    <p class="card-text fs-6 fw-light">${item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
});

const speakers = document.getElementById("speakers");
speakers.innerHTML += cards;
/*speakers.innerHTML.append(cards);*/
/*speakers.append(cards);*/