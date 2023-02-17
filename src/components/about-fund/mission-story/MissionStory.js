import Programms from "./Programms-conteiner";
import SubheadInfo from "./SubheadInfo";
import Story from "./Story-container";

export default function MissionStory() {
    return (
        <div>
            <SubheadInfo
                title="Наша головна мета"
                description="- це б'єднати зусилля з іншими організаціями та небайдужими людьми для надання психологічної, соціальної та гуманітарної допомоги сім'ям з дітьми та іншим вразливим верствам населення постраждалим через війну."
            />
            <SubheadInfo
                title="Напрямки роботи"
                description="Наша команда поставила перед собою завдання забезпечити  всім необхідним та надати гуманітарну допомогу населенню Харкова та Харківської області."
            />
            <Programms/>
            <SubheadInfo
                title="Історія фонду"
                description="Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel."
            />
            <Story/>
        </div>
    );
}
