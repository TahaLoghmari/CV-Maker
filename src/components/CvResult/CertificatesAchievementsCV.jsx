/* eslint-disable react/prop-types */
import { View, Text } from "@react-pdf/renderer";
export default function CertificatesAchievementsCV({ description }) {
  return (
    <View className="CertificatesAchievementsCV">
      <View className="CertificatesAchievementsCVTitle">
        C
        <Text className="CertificatesAchievementsCVTitleRest">ERTIFICATES</Text>{" "}
        / A
        <Text className="CertificatesAchievementsCVTitleRest">CHIEVEMENTS</Text>
      </View>
      <View
        className="PracticalExperiencedescription"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </View>
  );
}
