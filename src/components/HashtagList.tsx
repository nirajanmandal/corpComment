import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashTagItem from "./hashtag/HashTagItem";

export default function HashtagList() {

  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
