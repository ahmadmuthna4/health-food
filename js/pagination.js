
        const items = [
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/0-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu1-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu2-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },
            {
                src: "images/menu3-removebg-preview.png",
                desc: "Lorem ipsum dolor ",
                price: "33",
            },

        ];

        // const nav=document.getElementById('nav')
        const content = document.getElementById('content')

        let pageindex = 0;
        let itemspepage = 8;
        loaditem();
        function loaditem() {
            content.innerHTML = "";
            for (let i = pageindex * itemspepage; i < (pageindex * itemspepage) + itemspepage; i++) {

                // for (let  i = 0;  i<10;  i++) {
                if (!items[i]) { break }
                const item = document.createElement('div');
                if (i % 2 == 0) {
                    item.innerHTML = `
                <div>
                    
                    <p class="price-down" >${items[i].price}</p>
                    <p >${items[i].desc}</p>
                    
                    <img src="${items[i].src}" >
                    
                </div>
                `;
                } else {
                    item.innerHTML = `
                <div>
                    
                    <p class="price-up" >${items[i].price}</p>
                    <p style="margin-top: 16px;" >${items[i].desc}</p>
                    
                    <img src="${items[i].src}" >
                    
                </div>
                
                
                `;
                }

                item.classList.add("content-menu");
                item.classList.add("margin-botom");
                content.append(item);

            }
            loadpagnav();
        }
        function loadpagnav() {
            nav.innerHTML = "";
            for (let i = 0; i < items.length / itemspepage; i++) {
                const span = document.createElement('span');
                span.innerHTML = i + 1
                span.addEventListener('click', (e) => {
                    pageindex = e.target.innerHTML - 1;

                    loaditem()
                });

                console.log(span.innerHTML)
                if (pageindex == 0 && span.innerHTML == 1) {
                    span.classList.add("active");
                }
                if (pageindex == 1 && span.innerHTML == 2) {
                    span.classList.add("active");
                }
                if (pageindex == 2 && span.innerHTML == 3) {
                    span.classList.add("active");
                }
                if (pageindex == 3 && span.innerHTML == 4) {
                    span.classList.add("active");
                }
                span.classList.add("sercil");
                nav.append(span)
            }
        }
