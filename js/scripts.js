var websites_preview = document.getElementById("websites_preview")
var websites_preview_html = "";

for (let i = 0; i < 82; i++) {
    websites_preview_html += `
    <div>
        <img src="img/${i}.png" class="templates">
        <p style="z-index:15;">#${i}</p>
    </div>
    `;
}

websites_preview.innerHTML = websites_preview_html;


div_templates = document.getElementsByClassName('templates');

setTimeout(addAttribute, 100);

function addAttribute() {
    for (const [key, value] of Object.entries(div_templates)) {

        value.addEventListener('mouseover',function(){
            value.style="object-position: 0 -" + (value.clientHeight - 150) + "px";
        })

        value.addEventListener('mouseleave',function(){
            value.style = "";
        })

        value.addEventListener('click',function(){
            window.open("page-iframes/?id="+key, '_blank').focus();
        })
    }
}

