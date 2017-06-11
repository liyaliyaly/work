/**
 * Created by Administrator on 2017/6/10 0010.
 */
export default class refn{
    constructor(cls){
        this.el=document.querySelector(cls);
        this.box=this.el.querySelectorAll('.box p input');
        this.cks=this.el.querySelectorAll('.cks');
        this.reset=this.el.querySelector('.reset');
        this.star=this.el.querySelector('.star');
        this.datas=[];
        this.bindEvent();

    }
    bindEvent(){
        console.log(localStorage);
        this.reset.addEventListener('click',()=>{
            this.box[0].checked="checked";
            for(let v of this.cks){
                v.checked=false;
            }
        })
        this.star.addEventListener('click',()=>{
            for(let x of this.box){
                if(x.checked==true){
                    this.datas=[];
                    this.datas.push(x.parentElement.querySelector('label').getAttribute('data'))
                }
            }
            for(let x of this.cks){
                if(x.checked==true){
                    this.datas.push(x.parentElement.innerText)
                }
            }
            localStorage.setItem('lastname', this.datas);
            console.log(localStorage);
        })
    }

}