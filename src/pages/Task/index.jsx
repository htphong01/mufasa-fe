import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { updateUserByToken } from '../../api/users';

export default function TaskPage() {
  let [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const task = searchParams.get('task');

  const handleOpenLink = async (type) => {
    let url = '';
    switch (type) {
      case 'telegramGroup':
        url = 'https://t.me/mufasalol';
        break;
      case 'telegramAnnouncement':
        url = 'https://t.me/mufasaannoucement';
        break;
      case 'mufasaTwitter':
        url = 'https://x.com/mufasalol_';
        break;
      case 'lionKingTwitter':
        url = 'https://twitter.com/Dublyking';
        break;
      case 'mufasaDiscord':
        url = 'https://discord.com/invite/hnNPHejPDZ';
        break;
    }
    await updateUserByToken(token, { [type]: true });
    window.location.href = url;
  };

  useEffect(() => {
    handleOpenLink(task);
  }, []);

  return <div>TaskPage</div>;
}
