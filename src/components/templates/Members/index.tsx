import * as React from "react";
import styles from "./members.module.scss";
import { JoinedGenerationType } from "types/responseTypes";
import { PageTab, TabItem } from "components/molecules/PageTab";
import { parse } from "query-string";
import { MemberCard } from "components/atoms/MemberCard";
import { AnimatePresence, motion } from "framer-motion";

export type MemberType = {
  name: string;
  nameNotations: {
    lastName: string;
    firstName: string;
    lastNameEn: string;
    firstNameEn: string;
  };
  join: JoinedGenerationType;
  graduation: {
    isGraduated: boolean;
  };
  profileImage: {
    large: string;
    small: string;
  };
};

const pageTabItems: TabItem[] = [
  {
    link: "/allmembers/?page=first-gen",
    page: "first-gen",
  },
  {
    link: "/allmembers/?page=second-gen",
    page: "second-gen",
  },
  {
    link: "/allmembers/?page=third-gen",
    page: "third-gen",
  },
  {
    link: "/allmembers/?page=fourth-gen",
    page: "fourth-gen",
  },
  {
    link: "/allmembers/?page=graduated",
    page: "graduated",
  },
];

interface MembersProps {
  query: string;
  members: {
    first: MemberType[];
    second: MemberType[];
    third: MemberType[];
    fourth: MemberType[];
    graduated: MemberType[];
  };
}

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.03,
      delayChildren: 0.2,
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export const Members = (props: MembersProps) => {
  const { page } = React.useMemo(() => parse(props.query), [props.query]);

  const pageMembers = React.useMemo(() => {
    switch (page) {
      case "first-gen":
        return props.members.first;
      case "second-gen":
        return props.members.second;
      case "third-gen":
        return props.members.third;
      case "fourth-gen":
        return props.members.fourth;
      case "graduated":
        return props.members.graduated;
      default:
        return props.members.first;
    }
  }, [page, props.members]);

  return (
    <div>
      <PageTab
        items={pageTabItems}
        selectedItem={page ? (page as string) : "first"}
        className={styles.tabs}
      />
      <AnimatePresence>
        <motion.div
          key={page as string}
          exit="hidden"
          variants={listVariants}
          className={styles.grid}
        >
          {pageMembers.map(({ name, profileImage, nameNotations }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className={styles.card}
            >
              <MemberCard
                image={profileImage}
                nameKey={name}
                name={nameNotations}
                highlightBgColor="#e887a3"
                highlightTextColor="#ffffff"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};