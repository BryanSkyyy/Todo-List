(()=>{"use strict";const e=[];let t=0;const n=e=>({name:e,index:t,todoIndex:0,list:[]}),d=(e,t,n,d)=>({title:e,description:t,dueDate:n,project:d,index:0,complete:!1}),o=(t,n)=>{let d=e[n.index];d.list.push(t),t.index=d.todoIndex,d.todoIndex++},i=n=>{e.push(n),t++};let l=n("Default");i(l);let r=d("Create","Create more tasks","tomorrow",l);o(r,l);let a=d("Creat2","Create more tasks","tomorrow",l);o(a,l);let c=d("Creat3","Create more tasks","tomorrow",l);o(c,l);let s=n("project2");i(s);let m=d("Creat3","Create more tasks","tomorrow",l);o(m,s);let p=e[0],u=!1,C=!1;const h=document.getElementById("content"),E=document.createElement("div");E.id="side-bar";const v=document.createElement("div");v.id="todo-bar";const f=document.createElement("div");f.id="done-bar";const b=()=>{const t=document.createElement("p");t.id="side-title",t.textContent="Too Much To Do",E.appendChild(t);const n=document.createElement("div");e.forEach((e=>{let t=document.createElement("div");e==p&&(t.style.color="red"),t.setAttribute("class","project-links"),t.addEventListener("click",(()=>{p=e,x(),k()})),t.textContent=e.name,n.appendChild(t)})),E.appendChild(n);const d=document.createElement("button");d.id="new-project-button",d.textContent="+",d.addEventListener("click",I),E.appendChild(d)};function x(){for(;v.firstChild;)v.removeChild(v.firstChild);y()}function k(){for(;E.firstChild;)E.removeChild(E.firstChild);b()}function y(){const e=document.createElement("div");e.id="todo-top-div";const t=document.createElement("h3");t.textContent="To Do",e.appendChild(t);const n=document.createElement("button");n.id="new-task-button",n.textContent="+",n.addEventListener("click",w),e.appendChild(n),v.appendChild(e);let d=p.list.slice();d.reverse(),d.forEach((e=>{let t=document.createElement("div");t.setAttribute("class","task-div");let n=document.createElement("p");n.setAttribute("class","task-name"),n.textContent=e.title,t.appendChild(n);let d=document.createElement("p");d.setAttribute("class","task-due-date"),d.textContent=e.dueDate,t.appendChild(d);let o=document.createElement("p");o.setAttribute("class","task-priority"),o.textContent=e.priority,t.appendChild(o),v.appendChild(t)}))}function w(){if(u){let e=document.getElementById("new-task-div");v.removeChild(e)}u=!0;let e="",t="",n=document.createElement("div");n.setAttribute("class","task-div"),n.id="new-task-div";let i=document.createElement("form"),l=document.createElement("input");l.type="text",l.required=!0,l.setAttribute("placeholder","Enter Task Name"),i.appendChild(l);let r=document.createElement("input");r.type="date",i.appendChild(r);let a=document.createElement("button");a.type="submit",a.textContent="Create",i.appendChild(a),i.addEventListener("submit",(n=>{n.preventDefault(),e=l.value,t=r.value;let i=d(e,"",t,p);o(i,p),u=!1,x()})),n.appendChild(i);let c=document.getElementById("todo-top-div");v.insertBefore(n,c.nextSibling)}function I(){if(C){let e=document.getElementById("new-proj-div");E.removeChild(e)}C=!0;let e=document.createElement("div");e.id="new-proj-div";let t=document.createElement("form"),d=document.createElement("input");d.type="text",d.style.width="100px",d.required=!0,t.appendChild(d),t.addEventListener("submit",(e=>{e.preventDefault();let t=d.value,o=n(t);i(o),C=!1,k()})),e.appendChild(t);let o=document.getElementById("new-project-button");E.insertBefore(e,o)}h.appendChild(E),h.appendChild(v),h.appendChild(f),b(),y()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0cyA9IFtdO1xubGV0IHByb2plY3RzSW5kZXggPSAwO1xuXG5cblxuY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBsZXQgdG9kb0luZGV4ID0gMDtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0c0luZGV4O1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGluZGV4LFxuICAgICAgICB0b2RvSW5kZXgsXG4gICAgICAgIGxpc3QsXG4gICAgfVxufVxuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCkgPT4ge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgY29tcGxldGUsXG4gICAgfVxufVxuXG5jb25zdCBhZGRUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBsZXQgY29ycmVjdCA9IHByb2plY3RzW3Byb2plY3QuaW5kZXhdO1xuICAgIGNvcnJlY3QubGlzdC5wdXNoKHRvZG8pO1xuICAgIHRvZG8uaW5kZXggPSBjb3JyZWN0LnRvZG9JbmRleDtcbiAgICBjb3JyZWN0LnRvZG9JbmRleCsrO1xufVxuXG5jb25zdCByZW1vdmVUb2RvID0gKHRvZG8sIHByb2plY3QpID0+IHtcbiAgICBsZXQgY29ycmVjdCA9IHByb2plY3RzW3Byb2plY3QuaW5kZXhdO1xuICAgIGNvcnJlY3QubGlzdC5zcGxpY2UodG9kby5pbmRleCwgMSk7XG4gICAgY29ycmVjdC5saXN0LmZvckVhY2godGhpbmcgPT4ge1xuICAgICAgICBpZiAodGhpbmcuaW5kZXggPj0gdG9kby5pbmRleCkge1xuICAgICAgICAgICAgdGhpbmcuaW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvcnJlY3QudG9kb0luZGV4LS07XG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvaikgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvaik7XG4gICAgcHJvamVjdHNJbmRleCsrO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5pbmRleCA+PSBpbmRleCkge1xuICAgICAgICAgICAgcHJvamVjdC5pbmRleCA9IHByb2plY3QuaW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdHNJbmRleC0tO1xufVxuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdEZWZhdWx0Jyk7XG5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IHRvZG8xID0gVG9kbygnQ3JlYXRlJywgJ0NyZWF0ZSBtb3JlIHRhc2tzJywgJ3RvbW9ycm93JywgZGVmYXVsdFByb2plY3QpO1xuXG5hZGRUb2RvKHRvZG8xLCBkZWZhdWx0UHJvamVjdCk7XG5cbmxldCB0b2RvMiA9IFRvZG8oJ0NyZWF0MicsICdDcmVhdGUgbW9yZSB0YXNrcycsICd0b21vcnJvdycsIGRlZmF1bHRQcm9qZWN0KTtcblxuYWRkVG9kbyh0b2RvMiwgZGVmYXVsdFByb2plY3QpO1xuXG5sZXQgdG9kbzMgPSBUb2RvKCdDcmVhdDMnLCAnQ3JlYXRlIG1vcmUgdGFza3MnLCAndG9tb3Jyb3cnLCBkZWZhdWx0UHJvamVjdCk7XG5cbmFkZFRvZG8odG9kbzMsIGRlZmF1bHRQcm9qZWN0KTtcblxuXG5sZXQgcHJvamVjdDIgPSBQcm9qZWN0KFwicHJvamVjdDJcIik7XG5hZGRQcm9qZWN0KHByb2plY3QyKTtcbmxldCB0b2RvNCA9IFRvZG8oJ0NyZWF0MycsICdDcmVhdGUgbW9yZSB0YXNrcycsICd0b21vcnJvdycsIGRlZmF1bHRQcm9qZWN0KTtcblxuYWRkVG9kbyh0b2RvNCwgcHJvamVjdDIpO1xuZXhwb3J0IHtwcm9qZWN0cywgVG9kbywgUHJvamVjdCwgYWRkVG9kbywgcmVtb3ZlVG9kbywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdH0iLCJpbXBvcnQge3Byb2plY3RzLCBUb2RvLCBQcm9qZWN0LCBhZGRUb2RvLCByZW1vdmVUb2RvLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0fSBmcm9tICcuL3N0cnVjdHVyZSdcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF07XG5cbmxldCBuZXdUYXNrQWN0aXZlID0gZmFsc2U7XG5cbmxldCBuZXdQcm9qZWN0QWN0aXZlID0gZmFsc2U7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaWRlQmFyLmlkID0gJ3NpZGUtYmFyJztcblxuY29uc3QgdG9kb0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudG9kb0Jhci5pZCA9ICd0b2RvLWJhcic7XG5cbmNvbnN0IGRvbmVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvbmVCYXIuaWQgPSAnZG9uZS1iYXInO1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzaWRlVGl0bGUuaWQgPSAnc2lkZS10aXRsZSc7XG4gICAgc2lkZVRpdGxlLnRleHRDb250ZW50ID0gJ1RvbyBNdWNoIFRvIERvJztcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGxldCBjdXJyUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAocHJvamVjdCA9PSBjdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgICAgY3VyclByb2ouc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgfTtcbiAgICAgICAgY3VyclByb2ouc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWxpbmtzJyk7XG4gICAgICAgIGN1cnJQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgICAgICAgY2xlYXJTaWRlYmFyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyUHJvai50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3VyclByb2opO1xuICAgIH0pO1xuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uaWQgPSAnbmV3LXByb2plY3QtYnV0dG9uJztcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgd2hpbGUgKHRvZG9CYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RvQmFyLnJlbW92ZUNoaWxkKHRvZG9CYXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNyZWF0ZVRvZG9CYXIoKTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyU2lkZWJhcigpIHtcbiAgICB3aGlsZShzaWRlQmFyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2lkZUJhci5yZW1vdmVDaGlsZChzaWRlQmFyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjcmVhdGVTaWRlYmFyKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9CYXIoKSB7XG4gICAgY29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Ub3BEaXYuaWQgPSAndG9kby10b3AtZGl2JztcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9ICdUbyBEbyc7XG4gICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlkID0gJ25ldy10YXNrLWJ1dHRvbic7XG4gICAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VGFza0Zvcm0pO1xuICAgIHRvZG9Ub3BEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG4gICAgdG9kb0Jhci5hcHBlbmRDaGlsZCh0b2RvVG9wRGl2KTtcbiAgICBsZXQgcmV2ZXJzZWRMaXN0ID0gY3VycmVudFByb2plY3QubGlzdC5zbGljZSgpO1xuICAgIHJldmVyc2VkTGlzdC5yZXZlcnNlKCk7XG4gICAgcmV2ZXJzZWRMaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWRpdicpO1xuICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIGxldCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0R1ZWRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIHRhc2tEdWVkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKTtcbiAgICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1wcmlvcml0eScpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgIHRvZG9CYXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tGb3JtKCkge1xuICAgIGlmIChuZXdUYXNrQWN0aXZlKSB7XG4gICAgICAgIGxldCBsYXN0TmV3VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1kaXYnKVxuICAgICAgICB0b2RvQmFyLnJlbW92ZUNoaWxkKGxhc3ROZXdUYXNrKTtcbiAgICB9XG4gICAgbmV3VGFza0FjdGl2ZSA9IHRydWU7XG4gICAgbGV0IG5hbWUgPSBcIlwiO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgbGV0IGRhdGUgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1kaXYnKTtcbiAgICBuZXdUYXNrRGl2LmlkID0gJ25ldy10YXNrLWRpdic7XG4gICAgbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3VGFza05hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBuZXdUYXNrTmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgbmV3VGFza05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBUYXNrIE5hbWUnKTtcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChuZXdUYXNrTmFtZSk7XG4gICAgbGV0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdUYXNrRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlKTtcblxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmFtZSA9IG5ld1Rhc2tOYW1lLnZhbHVlO1xuICAgICAgICBkYXRlID0gbmV3VGFza0RhdGUudmFsdWU7XG4gICAgICAgIGxldCB0b2RvID0gVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBhZGRUb2RvKHRvZG8sIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgbmV3VGFza0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgfSk7XG5cblxuICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xuICAgIGxldCB0aXRsZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRvcC1kaXYnKTtcbiAgICB0b2RvQmFyLmluc2VydEJlZm9yZShuZXdUYXNrRGl2LCB0aXRsZUJhci5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtICgpIHtcbiAgICBpZiAobmV3UHJvamVjdEFjdGl2ZSkge1xuICAgICAgICBsZXQgbGFzdE5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2otZGl2JylcbiAgICAgICAgc2lkZUJhci5yZW1vdmVDaGlsZChsYXN0TmV3UHJvamVjdCk7XG4gICAgfVxuICAgIG5ld1Byb2plY3RBY3RpdmUgPSB0cnVlO1xuICAgIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdERpdi5pZCA9ICduZXctcHJvai1kaXYnO1xuICAgIGxldCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3UHJvak5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBuZXdQcm9qTmFtZS5zdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgbmV3UHJvak5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIG5ld0Zvcm0uYXBwZW5kQ2hpbGQobmV3UHJvak5hbWUpO1xuICAgIG5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwcm9qTmFtZSA9IG5ld1Byb2pOYW1lLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdCA9IFByb2plY3QocHJvak5hbWUpO1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBuZXdQcm9qZWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNsZWFyU2lkZWJhcigpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdGb3JtKTtcbiAgICBsZXQgcGx1c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBzaWRlQmFyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0RGl2LCBwbHVzQnV0dG9uKTtcbn07XG4gXG5cblxuXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5jb250ZW50LmFwcGVuZENoaWxkKHRvZG9CYXIpO1xuY29udGVudC5hcHBlbmRDaGlsZChkb25lQmFyKTtcblxuZXhwb3J0IHtjcmVhdGVTaWRlYmFyLCBjcmVhdGVUb2RvQmFyfSIsImltcG9ydCB7Y3JlYXRlU2lkZWJhciwgY3JlYXRlVG9kb0Jhcn0gZnJvbSAnLi9ET01kaXNwbGF5J1xuXG5cblxuY3JlYXRlU2lkZWJhcigpO1xuY3JlYXRlVG9kb0JhcigpOyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInByb2plY3RzSW5kZXgiLCJQcm9qZWN0IiwibmFtZSIsImluZGV4IiwidG9kb0luZGV4IiwibGlzdCIsIlRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByb2plY3QiLCJjb21wbGV0ZSIsImFkZFRvZG8iLCJ0b2RvIiwiY29ycmVjdCIsInB1c2giLCJhZGRQcm9qZWN0IiwicHJvaiIsImRlZmF1bHRQcm9qZWN0IiwidG9kbzEiLCJ0b2RvMiIsInRvZG8zIiwicHJvamVjdDIiLCJ0b2RvNCIsImN1cnJlbnRQcm9qZWN0IiwibmV3VGFza0FjdGl2ZSIsIm5ld1Byb2plY3RBY3RpdmUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNpZGVCYXIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0b2RvQmFyIiwiZG9uZUJhciIsImNyZWF0ZVNpZGViYXIiLCJzaWRlVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHJvamVjdExpc3QiLCJmb3JFYWNoIiwiY3VyclByb2oiLCJzdHlsZSIsImNvbG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGFza3MiLCJjbGVhclNpZGViYXIiLCJuZXdQcm9qZWN0QnV0dG9uIiwibmV3UHJvamVjdEZvcm0iLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVUb2RvQmFyIiwidG9kb1RvcERpdiIsInRvZG9UaXRsZSIsIm5ld1Rhc2tCdXR0b24iLCJuZXdUYXNrRm9ybSIsInJldmVyc2VkTGlzdCIsInNsaWNlIiwicmV2ZXJzZSIsInRhc2siLCJ0YXNrRGl2IiwidGFza05hbWUiLCJ0YXNrRHVlZGF0ZSIsInRhc2tQcmlvcml0eSIsInByaW9yaXR5IiwibGFzdE5ld1Rhc2siLCJkYXRlIiwibmV3VGFza0RpdiIsIm5ld1Rhc2tOYW1lIiwidHlwZSIsInJlcXVpcmVkIiwibmV3VGFza0RhdGUiLCJzdWJtaXRCdXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0aXRsZUJhciIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwibGFzdE5ld1Byb2plY3QiLCJuZXdQcm9qZWN0RGl2IiwibmV3Rm9ybSIsIm5ld1Byb2pOYW1lIiwid2lkdGgiLCJwcm9qTmFtZSIsInBsdXNCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9