// const requestOptions = {
//     method: "GET",
//     redirect: "follow"
//   };
  
//   fetch("http://24.199.127.212:3000/teamMembersClient/get?page=2&limit=2", requestOptions)
//     .then((response) => response.text())
//     .then((result) => JSON.parse(result)["results"] .forEach(element => {
//         // document.write(`<img src="${element["image"]}">`);
//         console.log(element);
//     }))
//     .catch((error) => console.error(error));

const endpointteam = 'http://24.199.127.212:3000/teamMembersClient/get';
                            const cardPerPageteam = 6;
                            let currentPage = 1;
                            let cards = [];
                            let cardicon = [];
                            let cardimage = [];
                            let cardNext = [];
                            let cardPre = [];
                            let cardDes = [];
                            let cardTeam = [];

                            const team = document.getElementById("teams");
                            const nextBtnteam = document.getElementById('nextteam');
                            const preBtnteam = document.getElementById('previousteam');

                            async function fetchImagesteam() {
                                try {
                                    const response = await fetch(`${endpointteam}?page=${currentPage}`);
                                    const data = await response.json();
                                    arrOfImgs = data["results"].map(obj => [obj.name , obj.linkedin , obj.facebook , obj.image , obj.description , obj.track , obj.behanceOrGithub]);
                                    imagesteam = arrOfImgs; // Assuming the API response returns an array of image URLs

                                    renderImagesteam();
                                } catch (error) {
                                    console.error('Error fetching images:', error);
                                }

                            }

                            function renderImagesteam() {
                                team.innerHTML = '';

                                const startIndex = (currentPage - 1) * cardPerPageteam;
                                const endIndex = startIndex + cardPerPageteam;
                                if(currentPage===1){
                                    preBtnteam.style.display="none"
                                }
                                window.onscroll=()=>{
                                    myImage.forEach((pic)=>{
                                        let picTop = pic.getBoundingClientRect().top;
                                        if (picTop < totalHeight) {
                                        pic.classList.add("show");
                                        } else {
                                        pic.classList.remove("show");
                                        }})
                                }
                                for (let i = startIndex; i < endIndex && i < imagesteam.length; i++) {
                                    const img = document.createElement('img');
                                    img.src = images[i];
                                    let containerImg = document.createElement("div");
                                    containerImg.classList.add(`image`,`item${i+1}`);
                                    containerImg.appendChild(img)
                                    let cardDiv = document.createElement("div");
                                    cardDiv.classList.add("card1");
                                    
                                    let imageDiv = document.createElement("div");
                                    imageDiv.classList.add("image");
                                    let image = document.createElement("img");
                                    image.src =  imagesteam[i][3];
                                    image.alt = "";
                                    imageDiv.appendChild(image);
                                    cardDiv.appendChild(imageDiv);
                                    let textsDiv = document.createElement("div");
                                    textsDiv.classList.add("texts");
                                    let nameHeading = document.createElement("h3");
                                    nameHeading.textContent =imagesteam[i][0] ;
                                    let positionParagraph = document.createElement("p");
                                    positionParagraph.textContent = imagesteam[i][5];
                                    let descriptionParagraph = document.createElement("p");
                                    descriptionParagraph.classList.add("paragraph2");
                                    descriptionParagraph.textContent = imagesteam[i][4];
                                    textsDiv.appendChild(nameHeading);
                                    textsDiv.appendChild(positionParagraph);
                                    textsDiv.appendChild(descriptionParagraph);
                                    
                                    let iconsDiv = document.createElement("div");
                                    iconsDiv.classList.add("icons");
                                    let instagramLink = document.createElement("a");
                                    instagramLink.href = imagesteam[i][2];
                                    let instagramIcon = document.createElement("i");
                                    instagramIcon.classList.add("fa-brands", "fa-facebook", "fa-xl");
                                    instagramIcon.style.color = "#050505";
                                    instagramLink.appendChild(instagramIcon);
                                    
                                    let linkedinLink1 = document.createElement("a");
                                    linkedinLink1.href = imagesteam[i][1];
                                    let linkedinIcon1 = document.createElement("i");
                                    linkedinIcon1.classList.add("fa-brands", "fa-linkedin", "fa-xl");
                                    linkedinIcon1.style.color = "#000000";
                                    linkedinLink1.appendChild(linkedinIcon1);
                                    
                                    let linkedinLink2 = document.createElement("a");
                                    linkedinLink2.href = imagesteam[i][6];
                                    let linkedinIcon2 = document.createElement("i");
                                    linkedinIcon2.classList.add("fa-brands", "fa-github", "fa-xl");
                                    linkedinIcon2.style.color = "#050505";
                                    linkedinLink2.appendChild(linkedinIcon2);
                                    
                                    iconsDiv.appendChild(instagramLink);
                                    iconsDiv.appendChild(linkedinLink1);
                                    iconsDiv.appendChild(linkedinLink2);
                                    
                                    
                                    cardDiv.appendChild(imageDiv);
                                    cardDiv.appendChild(textsDiv);
                                    cardDiv.appendChild(iconsDiv);
                                    
                                    // إضافة العنصر الرئيسي إلى الصفحة
                                    document.body.appendChild(cardDiv);

// let cardDiv = document.createElement("div");
// cardDiv.classList.add("card1");

// let imageDiv = document.createElement("div");
// imageDiv.classList.add("image");
// let image = document.createElement("img");
// image.src = "./images/034236ede4d1329e9987f4990b723e54.jpg";
// image.alt = "";
// imageDiv.appendChild(image);

// let textsDiv = document.createElement("div");
// textsDiv.classList.add("texts");
// let nameHeading = document.createElement("h3");
// nameHeading.textContent = "Mostafa Abdelhakem";
// let positionParagraph = document.createElement("p");
// positionParagraph.textContent = "President MSP,24";
// let descriptionParagraph = document.createElement("p");
// descriptionParagraph.classList.add("paragraph2");
// descriptionParagraph.textContent = "President @Microsoft Student Partner | Senior Software Engineering Student | Curious Learner";
// textsDiv.appendChild(nameHeading);
// textsDiv.appendChild(positionParagraph);
// textsDiv.appendChild(descriptionParagraph);

// let iconsDiv = document.createElement("div");
// iconsDiv.classList.add("icons");
// let instagramLink = document.createElement("a");
// instagramLink.href = "#";
// let instagramIcon = document.createElement("i");
// instagramIcon.classList.add("fa-brands", "fa-instagram", "fa-xl");
// instagramIcon.style.color = "#000000";
// instagramLink.appendChild(instagramIcon);

// let linkedinLink1 = document.createElement("a");
// linkedinLink1.href = "#";
// let linkedinIcon1 = document.createElement("i");
// linkedinIcon1.classList.add("fa-brands", "fa-linkedin", "fa-xl");
// linkedinIcon1.style.color = "#000000";
// linkedinLink1.appendChild(linkedinIcon1);

// let linkedinLink2 = document.createElement("a");
// linkedinLink2.href = "#";
// let linkedinIcon2 = document.createElement("i");
// linkedinIcon2.classList.add("fa-brands", "fa-linkedin", "fa-xl");
// linkedinIcon2.style.color = "#000000";
// linkedinLink2.appendChild(linkedinIcon2);

// iconsDiv.appendChild(instagramLink);
// iconsDiv.appendChild(linkedinLink1);
// iconsDiv.appendChild(linkedinLink2);


// cardDiv.appendChild(imageDiv);
// cardDiv.appendChild(textsDiv);
// cardDiv.appendChild(iconsDiv);

// // إضافة العنصر الرئيسي إلى الصفحة
// document.body.appendChild(cardDiv);


                                   team.appendChild(cardDiv);
                                    // if(images.length<10){
                                    //     nextBtnteam.style.display="none"
                                    // }
                                }
                            }

                            // nextBtnteam.addEventListener('click', () => {
                            //     currentPage++;
                            //     renderImagesAll();
                            // });
                            // preBtnteam.addEventListener('click', () => {
                            //     currentPage--;
                            //     renderImagesAll();
                            // });

                            // fetchImagesteam();


                            // let cardDiv = document.createElement("div");
                            // cardDiv.classList.add("card1");
                            
                            // let imageDiv = document.createElement("div");
                            // imageDiv.classList.add("image");
                            // let image = document.createElement("img");
                            // image.src = "./images/034236ede4d1329e9987f4990b723e54.jpg";
                            // image.alt = "";
                            // imageDiv.appendChild(image);
                            
                            // let textsDiv = document.createElement("div");
                            // textsDiv.classList.add("texts");
                            // let nameHeading = document.createElement("h3");
                            // nameHeading.textContent = "Mostafa Abdelhakem";
                            // let positionParagraph = document.createElement("p");
                            // positionParagraph.textContent = "President MSP,24";
                            // let descriptionParagraph = document.createElement("p");
                            // descriptionParagraph.classList.add("paragraph2");
                            // descriptionParagraph.textContent = "President @Microsoft Student Partner | Senior Software Engineering Student | Curious Learner";
                            // textsDiv.appendChild(nameHeading);
                            // textsDiv.appendChild(positionParagraph);
                            // textsDiv.appendChild(descriptionParagraph);
                            
                            // let iconsDiv = document.createElement("div");
                            // iconsDiv.classList.add("icons");
                            // let instagramLink = document.createElement("a");
                            // instagramLink.href = "#";
                            // let instagramIcon = document.createElement("i");
                            // instagramIcon.classList.add("fa-brands", "fa-instagram", "fa-xl");
                            // instagramIcon.style.color = "#000000";
                            // instagramLink.appendChild(instagramIcon);
                            
                            // let linkedinLink1 = document.createElement("a");
                            // linkedinLink1.href = "#";
                            // let linkedinIcon1 = document.createElement("i");
                            // linkedinIcon1.classList.add("fa-brands", "fa-linkedin", "fa-xl");
                            // linkedinIcon1.style.color = "#000000";
                            // linkedinLink1.appendChild(linkedinIcon1);
                            
                            // let linkedinLink2 = document.createElement("a");
                            // linkedinLink2.href = "#";
                            // let linkedinIcon2 = document.createElement("i");
                            // linkedinIcon2.classList.add("fa-brands", "fa-linkedin", "fa-xl");
                            // linkedinIcon2.style.color = "#000000";
                            // linkedinLink2.appendChild(linkedinIcon2);
                            
                            // iconsDiv.appendChild(instagramLink);
                            // iconsDiv.appendChild(linkedinLink1);
                            // iconsDiv.appendChild(linkedinLink2);
                            
                            
                            // cardDiv.appendChild(imageDiv);
                            // cardDiv.appendChild(textsDiv);
                            // cardDiv.appendChild(iconsDiv);
                            
                            // // إضافة العنصر الرئيسي إلى الصفحة
                            // document.body.appendChild(cardDiv);






