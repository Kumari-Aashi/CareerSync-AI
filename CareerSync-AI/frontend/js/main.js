const jobs = [
 {title:"Machine Learning Intern", company:"Career Labs", logo:"CL", type:"AI", location:"Remote", stipend:"₹25k/mo", match:87, skills:["Python","SQL","Machine Learning","Pandas"]},
 {title:"Python Developer", company:"TechNova", logo:"TN", type:"Software", location:"Bengaluru", stipend:"₹6–8 LPA", match:94, skills:["Python","Flask","SQL","Git"]},
 {title:"Data Analyst Intern", company:"DataWorks", logo:"DW", type:"Data", location:"Hyderabad", stipend:"₹22k/mo", match:82, skills:["SQL","Python","Power BI","Pandas"]},
 {title:"AI Engineer Intern", company:"NeuralStack", logo:"NS", type:"AI", location:"Pune", stipend:"₹30k/mo", match:79, skills:["Python","TensorFlow","ML","Docker"]},
 {title:"Frontend Developer", company:"PixelForge", logo:"PF", type:"Software", location:"Remote", stipend:"₹5–7 LPA", match:76, skills:["HTML","CSS","JavaScript","Git"]},
 {title:"Junior Data Scientist", company:"InsightHub", logo:"IH", type:"Data", location:"Delhi", stipend:"₹7–9 LPA", match:74, skills:["Python","SQL","Scikit-learn","Statistics"]}
];
const applications = [
 ["Career Labs","ML Engineer Intern","20 Sep 2026","87%","Interview","interview"],
 ["TechNova","Python Developer","18 Sep 2026","94%","Selected","selected"],
 ["DataWorks","Data Analyst Intern","15 Sep 2026","82%","Shortlisted","shortlisted"],
 ["NeuralStack","AI Engineer Intern","12 Sep 2026","79%","Applied","shortlisted"],
 ["PixelForge","Frontend Developer","08 Sep 2026","76%","Applied","shortlisted"]
];
function showToast(msg){let t=document.querySelector(".toast");if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
function demoLogin(e){e.preventDefault();const role=document.getElementById("role").value;const path=role==="student"?"student/dashboard.html":role==="company"?"company/dashboard.html":"admin/dashboard.html";showToast("Signing in…");setTimeout(()=>location.href=path,500)}
function registerDemo(e){e.preventDefault();showToast("Account created! Opening your dashboard…");setTimeout(()=>location.href="student/dashboard.html",600)}
function showFile(input){if(input.files[0])document.getElementById("fileText").textContent="Selected: "+input.files[0].name}
function analyzeResume(){document.getElementById("resumeResult").classList.remove("hidden");showToast("Resume analyzed successfully")}
function renderJobs(targetId, limit){
 const el=document.getElementById(targetId); if(!el)return;
 const search=(document.getElementById("jobSearch")?.value||"").toLowerCase();
 const filter=document.getElementById("jobFilter")?.value||"all";
 let data=jobs.filter(j=>(filter==="all"||j.type===filter)&&(!search||`${j.title} ${j.company} ${j.skills.join(" ")}`.toLowerCase().includes(search))).sort((a,b)=>b.match-a);
 if(limit)data=data.slice(0,limit);
 if(targetId==="dashboardJobs"){el.innerHTML=data.map(j=>`<div class="job-mini"><span class="avatar">${j.logo}</span><div><b>${j.title}</b><small>${j.company} · ${j.location}</small></div><strong>${j.match}%</strong></div>`).join("");return}
 el.innerHTML=data.map(j=>`<article class="job-card"><div class="job-top"><span class="company-logo">${j.logo}</span><span class="match-score">${j.match}% match</span></div><h3>${j.title}</h3><span class="company">${j.company}</span><div class="job-meta"><span>⌖ ${j.location}</span><span>◷ ${j.type}</span><span>₹ ${j.stipend.replace(/^₹ /,"")}</span></div><div class="skill-tags">${j.skills.map(s=>`<span>${s}</span>`).join("")}</div><div class="job-actions"><button class="btn btn-primary btn-sm" onclick="applyJob('${j.title}')">Apply now</button><button class="btn btn-outline btn-sm" onclick="showToast('Job details opened')">View details</button></div></article>`).join("");
}
function applyJob(title){showToast(`Application started for ${title}`)}
function renderApplications(){const el=document.getElementById("applicationsTable");if(!el)return;el.innerHTML=applications.map(a=>`<tr><td><b>${a[0]}</b></td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td><span class="status ${a[5]}">${a[4]}</span></td></tr>`).join("")}
document.addEventListener("DOMContentLoaded",()=>{const style=document.createElement("style");style.textContent=".toast{position:fixed;right:25px;bottom:25px;background:#171b2c;color:#fff;padding:12px 16px;border-radius:10px;font-size:12px;box-shadow:0 10px 30px rgba(0,0,0,.2);transform:translateY(20px);opacity:0;transition:.25s;z-index:9999}.toast.show{transform:translateY(0);opacity:1}";document.head.appendChild(style)});
