import HashTagItem from "./hashtag/HashTagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};
export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
}
