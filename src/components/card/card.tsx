import Image from 'next/image'
import styles from './card.module.css'


export function Card() {
    return (
        <>
            <div className={styles.card + " text-black"}>
                <div className={styles.nameimageinfo + ' ' + styles.yellow}>
                    <div className={styles.nameheaders + " flex justify-between"}>
                        <div className={styles.nameofanimal}>Pikachu</div>
                        <div className={styles.nameheaders + " flex justify-end"}>
                            <div className={styles.hp}>40 HP</div>
                            <div className={styles.typesign}> ☻ </div>
                        </div>
                    </div>
                    <Image alt="Pikachu" src="/original.jpg" width={300} height={190} priority></Image>
                    <div className="">
                        <p className={styles.infoonly + " " + styles.description}>Mouse Pokémon. Length: 1'4", Weight: 13 lbs.</p>
                        <div className={styles.stats + " flex justify-between"}>
                            <div className={styles.energy}>☻</div>
                            <div className={styles.nameheaders + " flex justify-end"}>
                                <div className={styles.attackdescCENTER}><span className={styles.label}>Gnaw</span></div>
                                <div className={styles.damage}>10</div>
                            </div>
                        </div>
                        
                        <div className={styles.stats + "flex justify-between"}>                            
                            <div className={styles.energy}>☻ ☻</div>
                            <div className={styles.nameheaders + " flex justify-end"}>
                                <div><span className={styles.label}>Thundershock</span>
                                <span className={styles.labeltext}>Flip a coin. If tails, Pikachu does 10 damage to itself.</span>
                                </div>
                                <div className={styles.damage}>20</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className={styles.costs}>
                                <div className={styles.costheaders + " flex justify-between"}>
                                    <div>weakness</div>
                                    <div>resistance</div>
                                    <div>retreat cost</div>
                                </div>
                                <div className={styles.costicons + " flex justify-between"}>
                                    <div>☻</div>
                                    <div></div>
                                    <div>☻</div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className={styles.italicize}>When several of these Pokémon gather, their electricity could build and cause lightning storms. &nbsp; LV. 12 &nbsp; #25</div>
                                <div className={styles.copyrights}>
                                    <span className={styles.strong}>Illus Mitsuhiro Arita</span>
                                    <span className={styles.medium}>©1995, 96, 98 Nintendo Creatures, GAMEFREAK ©1999 Wizards</span>
                                    <span className={styles.strong}>58/102 ●</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
