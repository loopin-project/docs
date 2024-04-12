---
slug: the-genesis-of-pinfi-insights-into-its-conception-objectives-and-development
title: The Genesis of PinFi - Insights into Its Conception, Objectives, and Development
authors: jessica
tags: [LooPIN, PinFi]
---

# The Genesis of PinFi: Insights into Its Conception, Objectives, and Development

Every legend has its context. None emerges from a vacuum, nor do they fade into obscurity without impact. A true legend isn’t merely powerful; her arrival is impeccably timed—not a moment too soon or too late, which cements her legendary status. This pattern repeats itself in the realm of cryptocurrency. From Bitcoin to Ethereum, from DeFi to DePIN, and now, with PinFi, we witness the rise of legends time and again.

I know you have tens of thousands of doubts and questions swirling through your mind. That’s exactly why I wrote this blog: to thoroughly explain the concept of PinFi. From its inception and theoretical underpinnings to its applications in AI computing and potential impact on asset exchanges, this post covers everything you need to know. 

### What exactly PinFi is and Why we need PinFi?

Before we dig deep into PinFi, we need to consider the concept of “dissipative assets”. As its name indicates, a dissipative asset is a type of asset whose value naturally declines over time. Humans, services, electrical power, AI computing power, and hotel rooms all fall into this category. In fact, nearly everything you can think of qualifies as a dissipative asset. That’s right—even your house is a dissipative asset. Without proper maintenance, its value will diminish as time passes. 

Computing power, a key type of dissipative asset, is currently a major focus within the DePIN community. Countless teams are diligently working to develop their own decentralized computing networks (DCNs), such as Io.net, Nosana, Render Network, and Akash Network, among others. The growth of DCNs seems limitless, with more entities poised to enter the space and establish their networks.

The primary metric used to showcase the merits of these networks is the number of GPUs each DCN integrates. While the figures are impressive, the underlying reality often tells a different story. A closer inspection reveals minimal utilization of these networks; typically, only about 5% of the GPUs are actively engaged in processing AI tasks. The remaining 95% are largely underutilized, merely serving to bolster the network's claims of capacity. This discrepancy raises important questions about the efficiency and real-world utility of DCNs. Why does this underutilization occur? 

The key to understanding the underutilization of DCNs lies in assessing what DCNs can do better than traditional data centers. For training smaller models, such as CNNs, ResNets, or federated learning models, extensive parallel GPU use is not essential. As long as the GPUs provide sufficient TFLOPS and vRAM, these models can be effectively trained. This also applies to fine-tuning and inference with these smaller models, where DCNs should prove to be beneficial.

However, training modern large language models (LLMs) with DCNs presents challenges. Typically, it’s not the TFLOPS of GPUs that limit this process, but rather the bandwidth availability. State-of-the-art GPU training clusters rely on rail-optimized, any-to-any clos networks, which are critical for high-performance model training. To enhance inter-domain bandwidth, RDMA NICs capable of 100Gbps are essential. Furthermore, efficient job schedulers like Pollux, Themis, or Cassini are crucial to manage resources effectively. The absence of high-bandwidth connections and sophisticated scheduling schemes significantly restricts the usefulness of DCNs in training complex models.

The principal advantages of DCNs over traditional data centers are twofold: (1) they provide reliable and censorship-resistant services, and (2) they offer cost-effectiveness for training, fine-tuning, and inference of small models, as well as for fine-tuning and inference of large models. Any DCN naturally meets the first criterion, provided that its job scheduling algorithm is sufficiently competent. However, the second advantage is compromised by the prevalent pricing model in existing DCNs—a centralized order book that implies infinite liquidity at a single price. This pricing model leads to underutilization and inliquidity of resources.

To attract more users to decentralized computing networks (DCNs), the pricing of computing resources needs to be competitive. However, it is equally important to ensure that the pricing isn't so low as to deter GPU providers from connecting to the network. The equilibrium between these two stakeholders establishes the true market price for these resources. To facilitate this dynamic pricing, it is crucial to implement a market-making mechanism within DCNs. The most effective approach is to integrate the automated market-making systems commonly used in the decentralized finance world into DCNs. This is precisely the role of PinFi. In summary, PinFi represents the convergence of decentralized personal computing (DePIN) and decentralized finance (DeFi). Mathmatically PinFi = DeFi(DePin).

**How LooPIN, the first PinFi project works?**