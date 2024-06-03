export interface ITires {
  premium: ICheck[];
  medium: ICheck[];
  cheap: ICheck[];
}

interface ICheck {
  name: string;
  checked: boolean;
}

export const tires: ITires = {
  premium: [
    { name: 'Bridgestone', checked: false },
    { name: 'Continental', checked: false },
    { name: 'Dunlop', checked: false },
    { name: 'Goodyear', checked: false },
    { name: 'Michelin', checked: false },
    { name: 'Nokian Tyres', checked: false },
    { name: 'Pirelli', checked: false },
    { name: 'Vredestein', checked: false },
    { name: 'Yokohama', checked: false },
  ],

  medium: [
    { name: 'Falken', checked: false },
    { name: 'Firestone', checked: false },
    { name: 'Fulda', checked: false },
    { name: 'Hankook', checked: false },
    { name: 'Kleber', checked: false },
    { name: 'Kumho', checked: false },
    { name: 'Nexen', checked: false },
    { name: 'Uniroyal', checked: false },
    { name: 'Zeetex', checked: false },
  ],

  cheap: [
    { name: 'Barum', checked: false },
    { name: 'Compasal', checked: false },
    { name: 'Dębica', checked: false },
    { name: 'Firemax', checked: false },
    { name: 'Imperial', checked: false },
    { name: 'Kormoran', checked: false },
    { name: 'Laufenn', checked: false },
    { name: 'Mazzini', checked: false },
    { name: 'Nankang', checked: false },
  ],
};

// medium  "BFGoodrich","Semperit","Toyo"

// cheap
{
  /* <div className="notPromoted groupCheap show">
                    <ul>
                      <li className="withoutHover">
                        <span>A</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_30" className="">
                        <label title="Alliance" htmlFor="_carTires_ctTS_olProducers_rix_30_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_30_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_30_cbO" />
                          <span className="name">Alliance</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_31" className="">
                        <label title="Aplus" htmlFor="_carTires_ctTS_olProducers_rix_31_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_31_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_31_cbO" />
                          <span className="name">Aplus</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_32" className="">
                        <label title="Apollo" htmlFor="_carTires_ctTS_olProducers_rix_32_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_32_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_32_cbO" />
                          <span className="name">Apollo</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_33" className="">
                        <label title="Aptany" htmlFor="_carTires_ctTS_olProducers_rix_33_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_33_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_33_cbO" />
                          <span className="name">Aptany</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_34" className="checked">
                        <label title="Arivo" htmlFor="_carTires_ctTS_olProducers_rix_34_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_34_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_34_cbO" />
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_35" className="">
                        <label title="Atlas Tires" htmlFor="_carTires_ctTS_olProducers_rix_35_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_35_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_35_cbO" />
                          <span className="name">Atlas Tires</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_36" className="">
                        <label title="Austone" htmlFor="_carTires_ctTS_olProducers_rix_36_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_36_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_36_cbO" />
                          <span className="name">Austone</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_37" className="">
                        <label title="Autogreen" htmlFor="_carTires_ctTS_olProducers_rix_37_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_37_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_37_cbO" />
                          <span className="name">Autogreen</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_38" className="">
                        <label title="Avon" htmlFor="_carTires_ctTS_olProducers_rix_38_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_38_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_38_cbO" />
                          <span className="name">Avon</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>B</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_39" className="">
                        <label title="Berlin Tires" htmlFor="_carTires_ctTS_olProducers_rix_39_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_39_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_39_cbO" />
                          <span className="name">Berlin Tires</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_40" className="">
                        <label title="Black Arrow" htmlFor="_carTires_ctTS_olProducers_rix_40_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_40_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_40_cbO" />
                          <span className="name">Black Arrow</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>C</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_41" className="">
                        <label title="Ceat" htmlFor="_carTires_ctTS_olProducers_rix_41_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_41_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_41_cbO" />
                          <span className="name">Ceat</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_42" className="">
                        <label title="Cooper" htmlFor="_carTires_ctTS_olProducers_rix_42_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_42_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_42_cbO" />
                          <span className="name">Cooper</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_43" className="">
                        <label title="CST" htmlFor="_carTires_ctTS_olProducers_rix_43_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_43_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_43_cbO" />
                          <span className="name">CST</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>D</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_44" className="">
                        <label title="Davanti" htmlFor="_carTires_ctTS_olProducers_rix_44_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_44_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_44_cbO" />
                          <span className="name">Davanti</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_45" className="">
                        <label title="Diplomat" htmlFor="_carTires_ctTS_olProducers_rix_45_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_45_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_45_cbO" />
                          <span className="name">Diplomat</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_46" className="">
                        <label title="Double Coin" htmlFor="_carTires_ctTS_olProducers_rix_46_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_46_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_46_cbO" />
                          <span className="name">Double Coin</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_47" className="">
                        <label title="Duraturn" htmlFor="_carTires_ctTS_olProducers_rix_47_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_47_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_47_cbO" />
                          <span className="name">Duraturn</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>E</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_48" className="">
                        <label title="Evergreen" htmlFor="_carTires_ctTS_olProducers_rix_48_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_48_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_48_cbO" />
                          <span className="name">Evergreen</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_49" className="">
                        <label title="Everton" htmlFor="_carTires_ctTS_olProducers_rix_49_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_49_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_49_cbO" />
                          <span className="name">Everton</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>F</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_50" className="">
                        <label title="Fortuna" htmlFor="_carTires_ctTS_olProducers_rix_50_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_50_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_50_cbO" />
                          <span className="name">Fortuna</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_51" className="">
                        <label title="Fortune" htmlFor="_carTires_ctTS_olProducers_rix_51_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_51_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_51_cbO" />
                          <span className="name">htmlFortune</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_52" className="">
                        <label title="Fronway" htmlFor="_carTires_ctTS_olProducers_rix_52_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_52_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_52_cbO" />
                          <span className="name">Fronway</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>G</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_53" className="">
                        <label title="Gislaved" htmlFor="_carTires_ctTS_olProducers_rix_53_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_53_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_53_cbO" />
                          <span className="name">Gislaved</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_54" className="">
                        <label title="Goodride" htmlFor="_carTires_ctTS_olProducers_rix_54_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_54_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_54_cbO" />
                          <span className="name">Goodride</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_55" className="">
                        <label title="Grenlander" htmlFor="_carTires_ctTS_olProducers_rix_55_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_55_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_55_cbO" />
                          <span className="name">Grenlander</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_56" className="">
                        <label title="GT Radial" htmlFor="_carTires_ctTS_olProducers_rix_56_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_56_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_56_cbO" />
                          <span className="name">GT Radial</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>H</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_57" className="">
                        <label title="Hifly" htmlFor="_carTires_ctTS_olProducers_rix_57_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_57_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_57_cbO" />
                          <span className="name">Hifly</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>K</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_58" className="">
                        <label title="Kapsen" htmlFor="_carTires_ctTS_olProducers_rix_58_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_58_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_58_cbO" />
                          <span className="name">Kapsen</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_59" className="">
                        <label title="Kelly" htmlFor="_carTires_ctTS_olProducers_rix_59_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_59_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_59_cbO" />
                          <span className="name">Kelly</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_60" className="">
                        <label title="Kenda" htmlFor="_carTires_ctTS_olProducers_rix_60_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_60_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_60_cbO" />
                          <span className="name">Kenda</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_61" className="">
                        <label title="Kingstar" htmlFor="_carTires_ctTS_olProducers_rix_61_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_61_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_61_cbO" />
                          <span className="name">Kingstar</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>L</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_62" className="">
                        <label title="Landsail" htmlFor="_carTires_ctTS_olProducers_rix_62_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_62_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_62_cbO" />
                          <span className="name">Landsail</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_63" className="">
                        <label title="Lanvigator" htmlFor="_carTires_ctTS_olProducers_rix_63_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_63_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_63_cbO" />
                          <span className="name">Lanvigator</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_64" className="">
                        <label title="Lassa" htmlFor="_carTires_ctTS_olProducers_rix_64_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_64_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_64_cbO" />
                          <span className="name">Lassa</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_65" className="">
                        <label title="Leao" htmlFor="_carTires_ctTS_olProducers_rix_65_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_65_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_65_cbO" />
                          <span className="name">Leao</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_66" className="">
                        <label title="Linglong" htmlFor="_carTires_ctTS_olProducers_rix_66_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_66_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_66_cbO" />
                          <span className="name">Linglong</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>M</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_67" className="">
                        <label title="Mastersteel" htmlFor="_carTires_ctTS_olProducers_rix_67_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_67_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_67_cbO" />
                          <span className="name">Mastersteel</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_68" className="">
                        <label title="Matador" htmlFor="_carTires_ctTS_olProducers_rix_68_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_68_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_68_cbO" />
                          <span className="name">Matador</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_69" className="">
                        <label title="Maxxis" htmlFor="_carTires_ctTS_olProducers_rix_69_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_69_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_69_cbO" />
                          <span className="name">Maxxis</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_70" className="">
                        <label title="Milestone" htmlFor="_carTires_ctTS_olProducers_rix_70_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_70_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_70_cbO" />
                          <span className="name">Milestone</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_71" className="">
                        <label title="Milever" htmlFor="_carTires_ctTS_olProducers_rix_71_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_71_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_71_cbO" />
                          <span className="name">Milever</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_72" className="">
                        <label title="Minerva" htmlFor="_carTires_ctTS_olProducers_rix_72_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_72_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_72_cbO" />
                          <span className="name">Minerva</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_73" className="">
                        <label title="Mirage" htmlFor="_carTires_ctTS_olProducers_rix_73_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_73_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_73_cbO" />
                          <span className="name">Mirage</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>N</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_74" className="">
                        <label title="Neolin" htmlFor="_carTires_ctTS_olProducers_rix_74_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_74_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_74_cbO" />
                          <span className="name">Neolin</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_75" className="">
                        <label title="Nordexx" htmlFor="_carTires_ctTS_olProducers_rix_75_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_75_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_75_cbO" />
                          <span className="name">Nordexx</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>O</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_76" className="">
                        <label title="Orium" htmlFor="_carTires_ctTS_olProducers_rix_76_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_76_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_76_cbO" />
                          <span className="name">Orium</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_77" className="">
                        <label title="Ovation" htmlFor="_carTires_ctTS_olProducers_rix_77_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_77_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_77_cbO" />
                          <span className="name">Ovation</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>P</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_78" className="">
                        <label title="Paxaro" htmlFor="_carTires_ctTS_olProducers_rix_78_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_78_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_78_cbO" />
                          <span className="name">Paxaro</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_79" className="">
                        <label title="Petlas" htmlFor="_carTires_ctTS_olProducers_rix_79_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_79_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_79_cbO" />
                          <span className="name">Petlas</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_80" className="">
                        <label title="Premiorri" htmlFor="_carTires_ctTS_olProducers_rix_80_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_80_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_80_cbO" />
                          <span className="name">Premiorri</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>R</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_81" className="">
                        <label title="Radar" htmlFor="_carTires_ctTS_olProducers_rix_81_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_81_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_81_cbO" />
                          <span className="name">Radar</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_82" className="">
                        <label title="Riken" htmlFor="_carTires_ctTS_olProducers_rix_82_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_82_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_82_cbO" />
                          <span className="name">Riken</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_83" className="">
                        <label title="Roadhog" htmlFor="_carTires_ctTS_olProducers_rix_83_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_83_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_83_cbO" />
                          <span className="name">Roadhog</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_84" className="">
                        <label title="Roadking" htmlFor="_carTires_ctTS_olProducers_rix_84_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_84_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_84_cbO" />
                          <span className="name">Roadking</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_85" className="">
                        <label title="Roadmarch" htmlFor="_carTires_ctTS_olProducers_rix_85_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_85_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_85_cbO" />
                          <span className="name">Roadmarch</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_86" className="">
                        <label title="Roadstone" htmlFor="_carTires_ctTS_olProducers_rix_86_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_86_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_86_cbO" />
                          <span className="name">Roadstone</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_87" className="">
                        <label title="RoadX" htmlFor="_carTires_ctTS_olProducers_rix_87_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_87_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_87_cbO" />
                          <span className="name">RoadX</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_88" className="">
                        <label title="Rosava" htmlFor="_carTires_ctTS_olProducers_rix_88_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_88_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_88_cbO" />
                          <span className="name">Rosava</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_89" className="">
                        <label title="Rotalla" htmlFor="_carTires_ctTS_olProducers_rix_89_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_89_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_89_cbO" />
                          <span className="name">Rotalla</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_90" className="">
                        <label title="Rovelo" htmlFor="_carTires_ctTS_olProducers_rix_90_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_90_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_90_cbO" />
                          <span className="name">Rovelo</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_91" className="">
                        <label title="Royal Black" htmlFor="_carTires_ctTS_olProducers_rix_91_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_91_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_91_cbO" />
                          <span className="name">Royal Black</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>S</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_92" className="">
                        <label title="Sailun" htmlFor="_carTires_ctTS_olProducers_rix_92_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_92_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_92_cbO" />
                          <span className="name">Sailun</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_93" className="">
                        <label title="Sava" htmlFor="_carTires_ctTS_olProducers_rix_93_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_93_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_93_cbO" />
                          <span className="name">Sava</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_94" className="">
                        <label title="Sonix" htmlFor="_carTires_ctTS_olProducers_rix_94_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_94_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_94_cbO" />
                          <span className="name">Sonix</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_95" className="">
                        <label title="STARMAXX" htmlFor="_carTires_ctTS_olProducers_rix_95_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_95_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_95_cbO" />
                          <span className="name">STARMAXX</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_96" className="">
                        <label title="Sunfull" htmlFor="_carTires_ctTS_olProducers_rix_96_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_96_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_96_cbO" />
                          <span className="name">Sunfull</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_97" className="">
                        <label title="Sunwide" htmlFor="_carTires_ctTS_olProducers_rix_97_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_97_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_97_cbO" />
                          <span className="name">Sunwide</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_98" className="">
                        <label title="Superia" htmlFor="_carTires_ctTS_olProducers_rix_98_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_98_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_98_cbO" />
                          <span className="name">Superia</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_99" className="">
                        <label title="Syron" htmlFor="_carTires_ctTS_olProducers_rix_99_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_99_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_99_cbO" />
                          <span className="name">Syron</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>T</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_100" className="">
                        <label title="Taurus" htmlFor="_carTires_ctTS_olProducers_rix_100_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_100_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_100_cbO" />
                          <span className="name">Taurus</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_101" className="">
                        <label title="Tigar" htmlFor="_carTires_ctTS_olProducers_rix_101_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_101_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_101_cbO" />
                          <span className="name">Tigar</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_102" className="">
                        <label title="Tomket" htmlFor="_carTires_ctTS_olProducers_rix_102_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_102_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_102_cbO" />
                          <span className="name">Tomket</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_103" className="">
                        <label title="Torque" htmlFor="_carTires_ctTS_olProducers_rix_103_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_103_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_103_cbO" />
                          <span className="name">Torque</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_104" className="">
                        <label title="Tourador" htmlFor="_carTires_ctTS_olProducers_rix_104_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_104_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_104_cbO" />
                          <span className="name">Tourador</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_105" className="">
                        <label title="Tracmax" htmlFor="_carTires_ctTS_olProducers_rix_105_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_105_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_105_cbO" />
                          <span className="name">Tracmax</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_106" className="">
                        <label title="Trazano" htmlFor="_carTires_ctTS_olProducers_rix_106_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_106_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_106_cbO" />
                          <span className="name">Trazano</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_107" className="">
                        <label title="Triangle" htmlFor="_carTires_ctTS_olProducers_rix_107_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_107_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_107_cbO" />
                          <span className="name">Triangle</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_108" className="">
                        <label title="Tristar" htmlFor="_carTires_ctTS_olProducers_rix_108_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_108_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_108_cbO" />
                          <span className="name">Tristar</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>V</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_109" className="">
                        <label title="Viking" htmlFor="_carTires_ctTS_olProducers_rix_109_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_109_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_109_cbO" />
                          <span className="name">Viking</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_110" className="">
                        <label title="Voyager" htmlFor="_carTires_ctTS_olProducers_rix_110_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_110_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_110_cbO" />
                          <span className="name">Voyager</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="withoutHover">
                        <span>W</span>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_111" className="">
                        <label title="Wanli" htmlFor="_carTires_ctTS_olProducers_rix_111_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_111_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_111_cbO" />
                          <span className="name">Wanli</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_112" className="">
                        <label title="Waterfall" htmlFor="_carTires_ctTS_olProducers_rix_112_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_112_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_112_cbO" />
                          <span className="name">Waterfall</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_113" className="">
                        <label title="West Lake" htmlFor="_carTires_ctTS_olProducers_rix_113_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_113_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_113_cbO" />
                          <span className="name">West Lake</span>
                        </label>
                      </li>
                      <li id="_carTires_ctTS_olProducers_rix_114" className="">
                        <label title="Windforce" htmlFor="_carTires_ctTS_olProducers_rix_114_cbO">
                          <input id="_carTires_ctTS_olProducers_rix_114_cbO" type="checkbox" name="_carTires_ctTS_olProducers_rix_114_cbO" />
                          <span className="name">Windforce</span>
                        </label>
                      </li>
                    </ul>
                    <span className="hideRest hiddenBig hiddenMedium show">Mniej</span>
                  </div> */
}
