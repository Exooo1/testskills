import  styles from './table.module.scss'
import {useState} from "react";

export const Table =()=>{
    const [scale,setScale]=useState(1)
   return <main className={styles.main}>
       <button onClick={()=>setScale(scale+0.1)}>+</button>
       <button onClick={()=>setScale(scale-0.1)}>-</button>
        <section style={{transform:`scale(${scale})`}} className={styles.main_table}>
             <div className={styles.main_table_teamOne}>
                 <div className={styles.botContent}>
                     <div>
                         <div>Vlas</div>
                         <div>Diana</div>
                     </div>
                     <div className={styles.bot}>10</div>
                 </div>
                 <div className={styles.topContent}>
                     <div>
                         <div>Vlas</div>
                         <div>Diana</div>
                     </div>
                     <div className={styles.top}>10</div>
                 </div>
                 <div className={styles.botContent}>
                     <div>
                         <div>Vlas</div>
                         <div>Diana</div>
                     </div>
                     <div className={styles.bot}>10</div>
                 </div>
                 <div className={styles.topContent}>
                     <div>
                         <div>Vlas</div>
                         <div>Diana</div>
                     </div>
                     <div className={styles.top}>10</div>
                 </div>
             </div>
            <div className={styles.main_table_teamTwo}>
                <div className={styles.botContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.bot}>10</div>
                </div>
                <div className={styles.topContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.top}>10</div>
                </div>
            </div>
            <div className={styles.main_table_teamThree}>
            </div>
            <div className={styles.main_table_teamFour}>
            </div>
        </section>
   </main>
}
