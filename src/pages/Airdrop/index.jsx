import React, { useEffect, useState } from 'react';
import Tutorial from './Tutorial';
import Progress from './Progress';
import Introduction from './Introduction';
import { getUserByAddress, createUser } from '@/api/users';
import { useWallet } from '@solana/wallet-adapter-react';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function AirdropPage() {
  const [params] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();

  const { publicKey } = useWallet();

  const fetchUser = async () => {
    try {
      if(!publicKey) {
        setUser();
        return;
      }
      const { data } = await getUserByAddress(publicKey.toString());
      setUser(data);
      if (!data) {
        const { data } = await createUser(publicKey.toString(), params.get('ref'));
        setUser(data);
      }
    } catch (error) {
      toast.error('An error occurred while fetching');
    }
  };

  useEffect(() => {
    fetchUser();
  }, [publicKey]);

  return (
    <div>
      {isLoading && (
        <div className="screen-loading-overlay">
          <ReactLoading type="spinningBubbles" color="#ffffff" height={60} width={60} />
        </div>
      )}
      <Progress user={user} />
      <Tutorial user={user} />
      <Introduction />
    </div>
  );
}
