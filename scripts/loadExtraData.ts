import { ChainMap } from '@hyperlane-xyz/sdk';
import { ExtraChainData } from '../src/types';
import { GithubRegistry } from '@hyperlane-xyz/registry';
import { ProtocolType } from '@hyperlane-xyz/utils';
import { extraChainData } from '../src/constants';

const run = async () => {
  const registry = new GithubRegistry();
  const metadata = await registry.getMetadata();
  const addresses = await registry.getAddresses();

  const chains = Object.values(metadata)
    // Filter out EVM chains that don't have a mailbox address
    .filter((chain) =>
      chain.protocol === ProtocolType.Ethereum
        ? addresses[chain.name]?.mailbox
        : true,
    )
    .sort((a, b) => Number(a.chainId) - Number(b.chainId));

  const newExtraChainData: ChainMap<ExtraChainData> = {};

  try {
    for (const chain of chains) {
      if (extraChainData[chain.name]) {
        newExtraChainData[chain.name] = extraChainData[chain.name];
        continue;
      }

      const commits = (await fetch(
        `https://api.github.com/repos/hyperlane-xyz/hyperlane-registry/commits?path=chains/${chain.name}`,
      ).then((res) => res.json())) as any[];

      const firstCommit = commits.at(-1);

      if (firstCommit) {
        newExtraChainData[chain.name] = {
          addedAt: new Date(firstCommit.commit.author.date).getTime(),
        };
      }
    }
  } catch (e) {}

  console.log(
    Object.fromEntries(
      Object.entries(newExtraChainData).sort(
        ([, a], [, b]) => a.addedAt - b.addedAt,
      ),
    ),
  );
};

run();
