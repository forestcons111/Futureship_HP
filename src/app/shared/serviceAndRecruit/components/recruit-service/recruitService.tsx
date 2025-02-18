import styles from './recruitService.module.scss';
import { useRouter } from 'next/navigation';

interface RecruitServiceChild {
  title: string;
  description: string[];
  button: string;
}

const RecruitService: React.FC<RecruitServiceChild> = (props) => {
  const router = useRouter();
  const onClickContact = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.recruitService}>
      <div className={styles.title}>{props.title}</div>

      {props.description.map((desc) => {
        return (
          <div className={styles.description}>
            {desc.split('\n').map((line) => (
              <div className={styles.line}>{line}</div>
            ))}
          </div>
        );
      })}

      <button className={styles.button} onClick={onClickContact}>
        {props.button}
      </button>
    </div>
  );
};
export default RecruitService;
